import axios from 'axios'
import { useEffect, useState } from 'react'

const Github_issues = () => {
    const [data, setData] = useState([])
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        axios.get(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
            .then((res) => { setData(res.data) })
            .catch((err) => { console.log(err) })
    }, [pageNumber])

    console.log(pageNumber)

    return (
        <div>
            <h1>Page Number - {pageNumber}</h1>
            <ol>
                {data.map((item) => {
                        return (
                            <li>{item.title}</li>
                        )
                })}
            </ol>
            <button id="load_next" onClick={() => {setPageNumber(pageNumber + 1)}} >Load Next</button>
            <button id="load_prev" onClick={() => { if (pageNumber != 1) {setPageNumber(pageNumber - 1)}}}>Load Previous</button>
        </div>
    )
}

export default Github_issues