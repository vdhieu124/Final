import './index.css' 
import { Input, Typography, Button, Space, Card, notification } from "antd";
import { DeleteOutlined,EditOutlined } from "@ant-design/icons";
import { useState } from "react";
const {Title, Text} = Typography;

// eslint-disable-next-line react/prop-types
function Todoapp({background, title}){
    const [newJob, setNewJob] = useState("");
    const [jobs, setJobs] = useState([]);
    const textColor ={color: '#fff'};

    const [api, contextHolder] = notification.useNotification();
    const errorNotification = () => {
        api['error']({
        message: 'Error',
        description:
            "Let's add new job!",
        placement:'top'
        });
    };
    const successNotification = () => {
        api['success']({
        message: 'Success',
        description:
            "Add new job successful!",
        placement:'top'
        });
    };
    const infoNotification = () => {
        api['info']({
        message: 'Notification',
        description:
            "Delete job successful!",
        placement:'top'
        });
    };
    function addJob(){
        if(!newJob){
            errorNotification();
            return;
        }
        const now = new Date();
        const currentTime = now.toLocaleTimeString();
        const job = {
            id: Math.floor(Math.random() *1000),
            value: newJob,
            time: currentTime
        };
        setJobs(oldJobs => [...oldJobs,job]);
        setNewJob("");
        successNotification();
        
    }
    function delJob(id){
        const newArr = jobs.filter(job => job.id !== id);
        setJobs(newArr);
        infoNotification();
    }
    return(
        <div className='todo'>
            {contextHolder}
            <div style={{backgroundColor: `${background}`}} className="box">
                <div className='header'>
                    <Title style={textColor}>{title}</Title>
                </div>
                <Title style={textColor} level={4}>New todo</Title>
                <div style={{
                    display: 'flex'
                }}>
                    <Input prefix={<EditOutlined />} type="text" placeholder="Add an item..." value={newJob} onChange={(e) => {setNewJob(e.target.value)}}/>
                    <Button type='primary' style={{border:'1px solid #fff'}} onClick={addJob}>Add todo</Button>
                </div>
                <div className='result'>
                    {jobs.map((job) => {
                        return(
                            <Card key={job.id} style={{height: '25%', marginBottom:5, overflow: 'hidden'}}>
                                <Space style={{ 
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '5px 10px'
                                }}>
                                    <Space size={0} direction='vertical'>
                                        <Title level={4}>{job.value}</Title>
                                        <Text italic>Created at {job.time}</Text>
                                    </Space>
                                    <Space style={{verticalAlign: 'super'}}>
                                        <Button style={{fontSize: '22px', color: `${background}`}} type='link' onClick={()=>delJob(job.id)}><DeleteOutlined /></Button>
                                    </Space>
                                </Space>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Todoapp