import React from 'react';
import { Link } from 'react-router-dom';



const Pager = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
        for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++){
            pageNumbers.push(i);
        }

    return(
        <nav>
            <ul className='pages'>
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <li className='page' key={number}> 
                            <Link className='pagenumber' onClick={() => paginate(number)} >{number}</Link>
                        </li>
                    ))
                }     
            
            </ul>

        </nav>
    )
}

export default Pager;
