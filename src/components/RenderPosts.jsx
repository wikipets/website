import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function RenderPosts({ markdown, isPreview, notDisplay }) {

    return (
        <div className="post">
            {isPreview ?
                notDisplay ? "" : <div className="preview">{markdown.substring(0, 250).replace(/\([^)]*\)|[#*~>()]/g, '') + "..."}</div> :
                <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            }
        </div>
    )
}