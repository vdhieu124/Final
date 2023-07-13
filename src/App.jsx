import { useState } from 'react'
import './App.css'
import { Layout, Typography, Menu, Button, Space, Drawer, Badge, Switch as AntdSwitch, Image, Avatar, Input as AntInput, Modal, ConfigProvider, Radio} from 'antd'
import {AppleOutlined, 
        SwapOutlined,  
        TableOutlined, 
        CalculatorOutlined, 
        HistoryOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        SettingOutlined,
        SearchOutlined,
        QuestionCircleOutlined,  
        BellOutlined,
        EditOutlined,
        CarryOutOutlined
      } from '@ant-design/icons'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import HelloWorld from './mini_proj/HelloWorld/HelloWorld'
import Pomodoro from './mini_proj/Pomodoro/Pomodoro'
import UnitConverter from './mini_proj/UnitConverter/UnitConverter'
import Input from './mini_proj/ChessBoard/Input/index'
import Calculator from './mini_proj/Calculator/Calculator'
import Quotes from './mini_proj/Quotes'
import Language from './components/Language'
import tr from './lang'
import Todoapp from './mini_proj/ToDoApp'
const {Content, Header, Sider, Footer} = Layout
const {Title, Text} = Typography



function App() {
  const selectedKey = window.location.pathname;
  const [collapsed, setCollapsed] = useState(true);
  const [theme, setTheme] = useState(true);
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [curColor, setCurColor] = useState('#1890ff');
  const [lang, setLang] = useState("en");

  const items = [
    {label: <Link to='/helloworld'>{tr('Hello world',lang)}</Link>, key: '/helloworld', icon: <AppleOutlined/>},
    {label: <Link to='/unitconverter'>{tr('Unit converter',lang)}</Link>, key: '/unitconverter', icon: <SwapOutlined />},
    {label: <Link to='/chessboard'>{tr('Chess board',lang)}</Link>, key: '/chessboard', icon: <TableOutlined />},
    {label: <Link to='/calculator'>{tr('Calculator',lang)}</Link>, key: '/calculator', icon: <CalculatorOutlined />},
    {label: <Link to='/pomodoro'>{tr('Pomodoro',lang)}</Link>, key: '/pomodoro', icon: <HistoryOutlined />},
    {label: <Link to='/quotes'>{tr('Quotes',lang)}</Link>, key: '/quotes', icon: <EditOutlined />},
    {label: <Link to='/todo'>{tr('Todo list',lang)}</Link>, key: '/todo', icon: <CarryOutOutlined />}
  ]
  const darkTheme = {
    header: {
      height: 64,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0px 24px',
    },
    headerItems: {
      color: '#fff',
      fontSize: '1.3em',
    }
  };
  const lightTheme = {
    header: {
      ...darkTheme.header,
      background: '#fff',
      borderBottom: '1px solid #ddd',
    },
    headerItems: {
      color: '#000',
      fontSize: '1.3em',
    }
  };
  const buttonCustomize = {
    position: 'absolute',
    // color: '#1890ff',
    margin: 15,
    fontSize: '20px',
  }
  
  const handlerCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handlerSearchInput = () => {
    setSearchInput(!searchInput);
  }
  const handlerTheme = () => {
    setTheme(!theme);
  };

  return(
    <ConfigProvider theme={{token: {colorPrimary: `${curColor}`}}}>
      <BrowserRouter>
        <Layout>
          <Header 
            style={theme?lightTheme.header:darkTheme.header}
          >
            <Space align='start'>
              <Image height={55} preview={false} src={theme?"./image/logo/kits.png":"./image/logo/kits2.png"}/>
            </Space>
            <Space>
              <Button type='link' size='small' onClick={handlerSearchInput}>
                <Space>
                  <SearchOutlined style={theme?lightTheme.headerItems:darkTheme.headerItems}/>
                </Space>
              </Button>
              {searchInput? <AntInput placeholder='Type here to search' size='middle'/>:""}
              <Button type='link' size='small' onClick={showModal}>
                <QuestionCircleOutlined style={theme?lightTheme.headerItems:darkTheme.headerItems} />
              </Button>
              <Modal title="Super Application" open={isModalOpen} onOk={handleCancel} cancelButtonProps={{style: {display: 'none'}}} >
                <Text italic>Super application with many mini applications.Using React JS and Ant Design to create.</Text>
              </Modal>
              <Button type='link' size='small'>
                <Badge count={4} size='small'>
                  <BellOutlined style={theme?lightTheme.headerItems:darkTheme.headerItems} />
                </Badge>
              </Button>
              <Button type='link' size='small'>
                <Space>
                  <Avatar style={{
                    backgroundColor: `${curColor}`,
                    verticalAlign:'text-bottom',
                  }} size='small'>H</Avatar>
                  <Text style={theme?lightTheme.headerItems:darkTheme.headerItems}>Vuong Duy Hieu</Text>
                </Space>
              </Button>
              <Language lang={lang} languages={[
                {lang: 'en', label: 'ENG'},
                {lang: 'vi', label: 'VIE'},
                {lang: 'kr', label: 'KOR'}
              ]} onClick={(newlang)=>setLang(newlang)}/>
            </Space>
          </Header>
          
          <Layout>
            <Sider collapsed={collapsed} theme={theme?'light':'dark'}> 
              <Menu theme={theme?'light':'dark'} defaultSelectedKeys={[selectedKey]} items={items}></Menu>
              <ConfigProvider theme={{token: {colorText: `${curColor}`}}}>
                <Button
                  type="text"
                  onClick={showDrawer}
                  style={{
                    ...buttonCustomize,
                    bottom: 50,
                  }}
                >
                  <SettingOutlined />
                </Button>
                <Button
                  type="text"
                  onClick={handlerCollapsed}
                  style={{
                    ...buttonCustomize,
                    bottom: 0,
                  }}
                >
                  {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
              </ConfigProvider>
              <Drawer title="Theme setting" placement="right" onClose={closeDrawer} open={open}
              style={{borderLeft: `3px solid ${curColor}`}}>
                <Space direction='vertical'>
                  <Space>
                    <Text>Night mode: </Text>
                    <AntdSwitch onChange={handlerTheme}/>
                  </Space>
                  <Space direction='vertical'>
                    <Text>Theme color: </Text>
                    <Radio.Group value={curColor} onChange={(e) => {setCurColor(e.target.value)}}>
                      <Space direction='vertical'>
                        <Radio style={{color: '#1890ff', fontWeight: 'bold'}} value={'#1890ff'}>Daybreak blue</Radio>
                        <Radio style={{color: '#33bcb7', fontWeight: 'bold'}} value={'#33bcb7'}>Cyan blue</Radio>
                        <Radio style={{color: '#e0529c', fontWeight: 'bold'}} value={'#e0529c'}>Magenta</Radio>
                        <Radio style={{color: '#fa541c', fontWeight: 'bold'}} value={'#fa541c'}>Volcano</Radio>
                        <Radio style={{color: '#faad14', fontWeight: 'bold'}} value={'#faad14'}>Sunset Orange</Radio>
                        <Radio style={{color: '#52c41a', fontWeight: 'bold'}} value={'#52c41a'}>Polar Green</Radio>
                        <Radio style={{color: '#8bbb11', fontWeight: 'bold'}} value={'#8bbb11'}>Lime</Radio>
                        <Radio style={{color: '#854eca', fontWeight: 'bold'}} value={'#854eca'}>Golden Purple</Radio>
                      </Space>
                    </Radio.Group>
                  </Space>
                </Space>
              </Drawer>
              
            </Sider>
            <Layout style={{backgroundColor: '#f0f2f5'}}>
              <Content
                style={{ backgroundColor: '#ffffff', minHeight:'calc(100vh - 64px - 50px - 30px)', margin: '15px' }}
              >
                <Switch>
                  <Route path='/helloworld'>
                    <HelloWorld title={tr('Hello world',lang)}/>
                  </Route>
                  <Route path='/unitconverter'>
                    <UnitConverter title={tr('Unit converter',lang)}/>
                  </Route>
                  <Route path='/chessboard'>
                    <Input title={tr('Chess board',lang)}/>
                  </Route>
                  <Route path='/calculator'>
                    <Calculator title={tr('Calculator',lang)}/>
                  </Route>
                  <Route path='/pomodoro'>
                    <Pomodoro title={tr('Pomodoro',lang)}/>
                  </Route>
                  <Route path='/quotes'>
                    <Quotes/>
                  </Route>
                  <Route path='/todo'>
                    <Todoapp background={curColor} title={tr('Todo list',lang)}/>
                  </Route>
                </Switch>

              </Content>
              <Footer style={{textAlign: 'center', padding: '9px 50px'}}>
                <Title level={5} type='default'>
                  &copy; 2023 Produced by Vuong Duy Hieu
                </Title>
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App