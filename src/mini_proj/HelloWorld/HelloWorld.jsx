import { useState } from "react"
import { Typography, Input, Card } from "antd"
const {Title} = Typography

// eslint-disable-next-line react/prop-types
function HelloWorld({title}){
    const [text, setText] = useState("")
    return(
        <>
            <Title style={{margin:15}}>{title}</Title>
            <div style={{width: '33%',margin: 'auto'}}>
                <Title level={3}>Input text</Title>
                <Input value={text} onChange={(e) => setText(e.target.value)}/>
                <Card style={{border:'1px solid #ddd'}} title='Display result'><Title type="success" level={4}>{text}</Title></Card>
            </div>
        </>
    )
}

export default HelloWorld