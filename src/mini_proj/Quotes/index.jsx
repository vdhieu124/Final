import { Button, Card, Carousel, Spin, notification } from "antd";
import { useEffect, useState } from "react"
import './index.css'

function Quotes(){
    const [quotes, setQuotes] = useState([]);
    const [error, setError] = useState(null)
    const styleButton = {
        left:'50%',
        top:50, 
        transform: 'translateX(-50%)',
    };
    const styleCarousel = {
        width: '33%', 
        margin:'auto', 
        top: 80, 
        opacity: 0.8,
    }
    const styleDefault={
        display: 'flex',
        justifyContent: 'center'
    }

    async function getQuotes(){
        try {
            const response = await fetch("http://localhost:3000/quotes", {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({num: 3}),
            });
            if (!response.ok){
                throw new Error('Cannot fetch API data!')
            }
            const data = await response.json();
            setQuotes(data);
        } catch (error) {
            setError(error.message);
            notification.error({
                message: 'Error',
                description: 'Cannot fetch API data!',
                placement:'top'
            });
        }       
    }
    useEffect(() => {
        getQuotes()
    },[])
    return(
        <>
            <div className="quotes">
                {error?
                    (<Carousel dots={false} style={styleCarousel} autoplay>
                        <Card><Spin size="large" style={styleDefault}></Spin></Card>
                        <Card><Spin size="large" style={styleDefault}></Spin></Card>
                    </Carousel>)
                :
                    (<><Button  style={styleButton} onClick={getQuotes}>
                        More quotes
                    </Button>
                    <Carousel dots={false} style={styleCarousel} autoplay>
                        {quotes.map((quote,idx) => 
                            <Card key={idx} title={quote.author}>
                                ❝ {quote.quote} ❞
                            </Card>
                        )}
                    </Carousel></>)
                }
            </div>
        </>
    )
}
export default Quotes