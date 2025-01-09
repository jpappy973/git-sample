import { useState } from "react"
import{Line} from 'react-chartjs-2'
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)




const graphData = async(dataS:any)=>{

    const dates = []
    const pushArr = []
    for(let i =0;i < dataS.values.length;i++){
        pushArr.push(dataS.values[i].close)
        dates.push(dataS.values[i].datetime)
    }
    console.log(pushArr)
    console.log(dates)

    const graphInfo={
        label:[
            dates[0],
            dates[1],
            dates[2],
            dates[3],
            dates[4],
            dates[5],
            dates[6],
            dates[7],
            dates[8],
            dates[9],
            dates[10],
            dates[11],
            dates[12],
            dates[13],
            dates[14],
            dates[15],
            dates[16],
            dates[17],
            dates[18],
            dates[19],
            dates[20],
            dates[21],
            dates[22],
            dates[23],
            dates[24],
            dates[25],
            dates[26],
            dates[27],
            dates[28],
            dates[29],
        ],
        datasets:[{
            label:`Monthly overview ${dataS.meta.symbol}`,
            data:[
                pushArr[0],
                pushArr[1],
                pushArr[2],
                pushArr[3],
                pushArr[4],
                pushArr[5],
                pushArr[6],
                pushArr[7],
                pushArr[8],
                pushArr[9],
                pushArr[10],
                pushArr[11],
                pushArr[12],
                pushArr[13],
                pushArr[14],
                pushArr[15],
                pushArr[16],
                pushArr[17],
                pushArr[18],
                pushArr[19],
                pushArr[20],
                pushArr[21],
                pushArr[22],
                pushArr[23],
                pushArr[24],
                pushArr[25],
                pushArr[26],
                pushArr[27],
                pushArr[28],
                pushArr[29],
            ],
            borderColor:'black',
            pointBorderColor:'aqua',

            
        }]
    } 

    const optionS = 
    {
        // plugins:{
        //     legend:true,

        // },
        // scales:{
        //     y:{
        //         min:0,
        //         max:200000
        //     }
        // }
    }
    return (
        <Line
        data= {graphInfo}
        options= {optionS}
        >

        </Line>
    )
}



const stockdata =()=>{
    const [seacher,setSeacher]= useState("")
    const [stockInfo,setStockInfo]:any =useState([])
    
    console.log(stockInfo)
    return (
        <div>
            <input type="text" onChange={async (e)=>{
                setSeacher(e.target.value.toUpperCase())
            }} />

            <button onClick={async ()=>{
                const res = await fetch(`https://api.twelvedata.com/time_series?symbol=${seacher}&interval=1day&apikey=${import.meta.env.VITE_APIKEY}`)

                const data:any = await res.json()
                console.log(data)
                const stockarr = [
                    data.meta.symbol,
                    data.values[0].open,
                    data.values[0].high,
                    data.values[0].low,
                    data.values[0].close]
                
                setStockInfo(stockarr)
                document.getElementById('symbol')!.innerHTML = `${stockarr[0]}`
                document.getElementById('open')!.innerHTML = `Open: $${stockarr[1]}`
                document.getElementById('high')!.innerHTML = `High: $${stockarr[2]}`
                document.getElementById('low')!.innerHTML = `Low: $${stockarr[3]}`
                document.getElementById('close')!.innerHTML = `Close: $${stockarr[4]}`
                // document.getElementById('graph')!.innerHTML=await graphData(data)
                console.log(graphData(data))
            }} >search</button>

            <p id="symbol"></p>
            <p id="open"></p>
            <p id="high"></p>
            <p id="low"></p>
            <p id="close"></p>
            <div id="graph"></div>
        </div>
    )
        
    
}

export default stockdata