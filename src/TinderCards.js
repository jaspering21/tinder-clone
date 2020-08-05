import React, {useState, useEffect} from 'react'
import TinderCard from "react-tinder-card"
import database from './firebase'
import './TinderCards.css'

function TinderCards() {

    const [people, setPeople] = useState ([

        {
            name: 'Lisa',
            //url: 'https://5b0988e595225.cdn.sohucs.com/images/20190621/4422cc2f4d104964ab76561e606a9c4d.jpeg'
            url : 'https://assets.vogue.com/photos/5ebc71d4a85f0288b7c3efda/4:3/w_3380,h_2535,c_limit/lisa-promo-crop.jpg'
        },
        {
            name: 'Rose',
            url: 'https://www.allkpop.com/upload/2020/02/content/121249/1581529740-rose.jpg'
        }   
    ]);

    //push to an array in REACT
    // setPeople ([...people,'1','2'])

    useEffect(()=>{
        //this is where the code runs
        //this will run once when the component loads
        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );

        return () =>{
            //cleanup
            unsubscribe();
        };
    }, []);

    return (
        <div>

            {people.map(person => (
                <TinderCard 
                    className = "swipe"
                    key={person.name}
                    preventSwipe = {['up','down']}
                >
                    
                    <div
                    style = {{ backgroundImage: `url(${person.url})`}}
                    className = "card"
                    >
                <h3>{person.name}</h3>
                </div>
                </TinderCard>
            ))}
            
        </div>
    );
}

export default TinderCards
