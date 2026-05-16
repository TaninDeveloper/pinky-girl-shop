import { useState, useEffect } from "react";

function FestivalTimer () {

    const targetdate = new Date ("2026-07-29T23:59:59").getTime ();
    const [timeleft, settimeleft] = useState (targetdate-new Date ().getTime ())

    useEffect (() => {
        const timer = setInterval (() => {
            settimeleft (targetdate-new Date ().getTime ())
        },1000) 

        return () => clearInterval (timer);
    }, []);


    const days = Math.floor ((timeleft / (1000 * 60 * 60 * 24)));
    const hours = Math.floor ((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ;
    const minutes = Math.floor ((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor ((timeleft % (1000 * 60)) / (1000));

    const timerdata = [
        { label: 'ثانیه', value: seconds },
        {label: 'دقیقه' , value: minutes},
        {label: 'ساعت', value: hours},
        {label: 'روز', value: days}
    ]


    return (

        <div className="container mt-5 text-center"
         style={{ direction: 'rtl', fontFamily: 'vazir' }}>

            <div  className="p-5 mx-auto" style={{
                background: 'linear-gradient(90deg, #000 0%, #ec0e93 100%)',
                borderRadius: '20px',
                color: 'white',
                maxWidth: '800px', 
                boxShadow: '0 8px 20px rgba(236, 14, 147, 0.3)',
                marginTop: '100px'
            }}>

                <svg style={{position: "relative", bottom: '20px'}} width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="10" width="18" height="11" rx="2" fill="#ec0e93" />
                
                <rect x="2" y="7" width="20" height="4" rx="1" fill="#ff4db8" />
                
                <rect x="10.5" y="7" width="3" height="14" fill="#ffffff" fillOpacity="0.3" />
                
                <path d="M12 7C12 7 12 3 9 3C6 3 6 7 12 7Z" fill="#ff80cc" stroke="#ffffff" strokeWidth="0.5"/>
                <path d="M12 7C12 7 12 3 15 3C18 3 18 7 12 7Z" fill="#ff80cc" stroke="#ffffff" strokeWidth="0.5"/>
                
                <circle cx="12" cy="7" r="1.5" fill="#ffffff" />
                
                <circle cx="18" cy="13" r="1" fill="white" fillOpacity="0.6" />
                <circle cx="16" cy="15" r="0.5" fill="white" fillOpacity="0.4" />
                </svg>

                <h3  className="mb-4"> 💖 جشنواره بزرگ پینکی گرل 💖 </h3>

                <p> تا پایان جشنواره تخفیف های شگفت انگیز</p>

                <div className="d-flex justify-content-center gap-3">

                    {timerdata.map ((item, index) => (

                        <div key={index} style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            padding: '10px',
                            borderRadius: '15px',
                            minWidth: '70px',
                            marginTop: '10px'}}>
                         

                        <h2 className="m-0 fw-bold"> {item.value} </h2>

                        <small style={{ fontSize: '12px' }}> {item.label} </small>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}
export default FestivalTimer

  

   