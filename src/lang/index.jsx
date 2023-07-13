const content={
    "Hello world": {
        'vi':'Chương trình đầu',
        'kr':'안녕 세계'
    },
    "Unit converter": {
        'vi':'Chuyển đổi tiền tệ',
        'kr':'단위 변환기'
    },
    "Chess board": {
        'vi':'Bàn cờ vua',
        'kr':'체스 보드'
    },
    "Calculator": {
        'vi':'Máy tính bỏ túi',
        'kr':'계산자'
    },
    "Pomodoro": {
        'vi':'Đồng hồ pomodoro',
        'kr':'포모도로 시계'
    },
    "Quotes": {
        'vi':'Châm ngôn',
        'kr':'격언'
    },
    "Todo list": {
        'vi':'Việc cần làm',
        'kr':'할 일 목록'
    },
}
function tr(text, lang){
    return (content[text] || {})[lang]||text
}
export default tr