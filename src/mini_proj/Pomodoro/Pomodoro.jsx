import { useEffect, useState } from 'react'
import './Pomodoro.css'
import { Typography, Button, Input, Space } from 'antd';
import {HistoryOutlined } from '@ant-design/icons'
const {Title, Text} = Typography;

let timeWork = 10;
let timeRelax = 5;
// eslint-disable-next-line react/prop-types
function Pomodoro({title}) {
  const [now, setNow] = useState(new Date());
  const [status, setStatus] = useState('Working');
  const [elapseTime, setElapseTime] = useState(timeWork);
  const [workTime, setWorkTime] = useState(timeWork);
  const [relaxTime, setRelaxTime] = useState(timeRelax);
  const [show, setShow] = useState(false);
  const [paused, setPaused] = useState(false);
  
  useEffect(() => {
    
    const time = setInterval(() => {
      
      if (paused === false){
        if(elapseTime > 0){
          setElapseTime(elapseTime => elapseTime-1)
        } else {
          if (status === 'Working'){
            setStatus('Break');
            setElapseTime(relaxTime);
          } else {
            setStatus('Working');
            setElapseTime(workTime);
          }
        }
      }
    },1000);
    return () => clearInterval(time);
  },[ status, elapseTime, relaxTime, workTime, paused]);
  useEffect(() => {
    setTimeout(() => {
        setNow(new Date());
      },1000)
  },[now])

  function pauseTime(){
    setPaused(true);
  }
  function startTime(){
    setPaused(false);
  }
  return(
    <div className={`container ${status}`}>
      <Title style={{textAlign: 'center', color: '#fff'}}>{title}</Title>
      <div className='pomodoro-clock'>
        <div className="content">
          <h1 className='now-time'>{now.toLocaleTimeString()}</h1>
          <h1 className='status'>{status=="Working"?'Time to work':'Time to relax'}</h1>
          <h1 className='elapse'>{`${Math.floor(elapseTime/60)}:${("00" + (elapseTime % 60)).slice(-2)}`}</h1>
          <div style={{marginBottom: '15px'}}>
            <Button onClick={() => setShow(!show)}>
              {show?"Hide settings":"Show settings"}
            </Button> 
          </div>
          {show?(
            <>
            <Space direction='vertical'>
              <Space>
                <Text strong>Work:</Text> <Input min={1} type="number" prefix={<HistoryOutlined />} suffix='Seconds' value={workTime} onChange={(e) => setWorkTime(e.target.value)} /> 
              </Space>
              <Space>
                <Text strong>Relax:</Text> <Input min={1} type="number" prefix={<HistoryOutlined />} suffix='Seconds' value={relaxTime} onChange={(e) => setRelaxTime(e.target.value)} />
              </Space>
              <Button onClick={paused?startTime:pauseTime}>{paused?'Continue':'Pause'}</Button>
            </Space>
            </>
          ):""}
        </div>
      </div>
    </div>
  )
  
}

export default Pomodoro
