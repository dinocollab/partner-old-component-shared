import { Box, SxProps, Theme, styled } from '@mui/material'
import { Component } from 'react'
import { DropzoneArea, DropzoneAreaProps } from '../DropZone'
interface UploadAreaProps extends DropzoneAreaProps {
  OnDroneChange: (files: File[]) => void
}
export default class UploadArea extends Component<UploadAreaProps> {
  render() {
    return (
      <Wrapper>
        <DropzoneArea
          dropzoneText="Drag and drop files here or click"
          showPreviewsInDropzone={false}
          maxFileSize={50 * Math.pow(1024, 3)}
          showAlerts={['error']}
          filesLimit={2000}
          onDrop={this.props.OnDroneChange}
          {...this.props}
        />
      </Wrapper>
    )
  }
}

const Wrapper = styled(Box)({
  flex: 1,
  display: 'flex',
  margin: '10px',
  '& .MuiDropzoneArea-root': {
    minHeight: 'auto',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1976d2',
  },
  '& .MuiSvgIcon-root': {
    color: '#1976d2',
  },
  '& .MuiDropzoneArea-active.MuiDropzoneArea-invalid': {
    borderColor: '#979797',
    backgroundImage: 'repeating-linear-gradient(-45deg, #dedede, #dedede 25px, #979797 25px, #979797 50px)',
    color: '#fff',
  },
  '& .MuiDropzoneArea-active.MuiDropzoneArea-invalid .MuiSvgIcon-root': {
    color: '#fff',
  },
})
