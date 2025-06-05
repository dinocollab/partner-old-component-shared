import React, { Component } from 'react'
interface IYoutubeImageProps {
    imgProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
    ContentId: string
}
interface IYoutubeImageState {
    image: string
}
export default class YoutubeImage extends Component<IYoutubeImageProps, IYoutubeImageState> {
    constructor(props: IYoutubeImageProps) {
        super(props)
        this.ApiKey = process.env.REACT_APP_YOUTUBE_IMAGE_KEY as string | undefined
        this.state = {
            image: 'https://i.ytimg.com/vi/111111111111/mqdefault.jpg'
        }
    }
    ApiKey: string | undefined = ''
    componentDidMount = () => {
        if (this.props.ContentId.length == 24) {
            fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${this.props.ContentId}&fields=items(id%2Csnippet%2Fthumbnails)&key=${this.ApiKey}`)
                .then(x => x.json())
                .then(x => {
                    const data = x as ResponseImage
                    this.setState({ image: data.items[0].snippet.thumbnails.default.url })
                })
                .catch(() => console.log("error!"))
        } else {
            this.setState({ image: `https://i.ytimg.com/vi/${this.props.ContentId}/mqdefault.jpg` })
        }
    }
    render() {
        const { src, ...other } = this.props.imgProps ?? {}
        return (
            <img src={this.state.image} {...other} />
        )
    }
}


export interface ResponseImage {
    items: Item[]
}

export interface Item {
    id: string
    snippet: Snippet
}

export interface Snippet {
    thumbnails: Thumbnails
}

export interface Thumbnails {
    default: Default
    medium: Medium
    high: High
}

export interface Default {
    url: string
    width: number
    height: number
}

export interface Medium {
    url: string
    width: number
    height: number
}

export interface High {
    url: string
    width: number
    height: number
}
