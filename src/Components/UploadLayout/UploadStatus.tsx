import { Close, ExpandMore } from '@mui/icons-material'
import { Box, Card, CardHeader, Typography, IconButton, Accordion, styled, Button } from '@mui/material'
import React, { Component } from 'react'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ProgressItem from './ProgressItem'
import { IUploadLayoutContext, UploadLayoutContext } from '.'

interface IUploadStatusProps {
  onUploadClose: React.MouseEventHandler<HTMLButtonElement>
  ContentHeight: number
}
interface IUploadStatusState {
  expand: boolean
}
export default class UploadStatus extends Component<IUploadStatusProps, IUploadStatusState> {
  constructor(props: IUploadStatusProps) {
    super(props)
    this.state = {
      expand: true,
    }
  }
  isUnmounted = false
  componentWillUnmount(): void {
    this.isUnmounted = true
  }
  UnCollapse = () => {
    this.setState({ expand: true })
  }
  expanChange = () => {
    this.setState({ expand: !this.state.expand })
  }
  gernerateItems = (context: IUploadLayoutContext) => {
    return context.items.map((item) => {
      return (
        <ProgressItem
          disableDelete={true}
          key={'key' + item.Id}
          item={item}
          {...item}
          onClose={() => context.onItemClose(item)}
          onRetry={() => context.onItemRetry(item)}
        />
      )
    })
  }

  // setState = <K extends keyof IUploadStatusState>(state: Pick<IUploadStatusState, K> | IUploadStatusState, callback?: () => void) => {
  //     if (this.isUnmounted) return
  //     super.setState(state, callback)
  // }
  componentDidMount(): void {}

  getErrorTitle = (context: IUploadLayoutContext) => {
    const errors = context.getErrors().length
    const onRetryAll: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault()
      e.stopPropagation()
      context.onRetryAll()
    }
    return errors ? (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button onClick={onRetryAll}>Retry all</Button>
        <Typography variant="subtitle2">{context.getErrors().length} error(s)</Typography>
      </Box>
    ) : (
      <></>
    )
  }
  render() {
    return (
      <UploadLayoutContext.Consumer>
        {(context) => {
          return (
            <Card sx={{ flex: 1, background: 'white', margin: '10px', border: '1px solid #e0e0e0' }}>
              <Accordion expanded={this.state.expand} onChange={this.expanChange} sx={{ padding: 0 }}>
                <AccordionSummary expandIcon={<ExpandMore />} sx={{ display: 'flex' }}>
                  <CardHeader
                    action={
                      <IconButton aria-label="settings" onClick={this.props.onUploadClose} sx={{ padding: 0 }}>
                        <Close />
                      </IconButton>
                    }
                    title={
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        Upload list ({context.getComplete().length}/{context.items.length})
                      </Typography>
                    }
                    subheader={this.getErrorTitle(context)}
                    sx={{
                      padding: '5px',
                      flex: 1,
                      '& .MuiCardHeader-action': {
                        margin: 0,
                      },
                    }}
                  />
                </AccordionSummary>
                <AccordionDetails sx={{ height: this.props.ContentHeight, padding: '8px 12px', overflow: 'auto' }}>
                  {this.gernerateItems(context)}
                </AccordionDetails>
              </Accordion>
            </Card>
          )
        }}
      </UploadLayoutContext.Consumer>
    )
  }
}
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ExpandMore sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  padding: ' 0 5px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    // transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    // transform: 'rotate(90deg)',
    margin: 0,
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
    display: 'flex',
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))
