import PopUp from "./popup";
import {useState} from 'react'
const JobPage = () => {
    const [trigger, setTrigger] = useState(false);
    return (
        <div>
            <div className="page">
                <h1>Stock Analyst</h1>
                <h2>at BRANDED</h2>
                <p>Manila</p>
                <div className="overview">
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur ullam doloribus assumenda quasi itaque voluptate a, aliquam commodi facilis maiores ipsam alias tempora, unde quaerat error, voluptates modi ad.</p>
                </div>
                <div className="aboutTheRole">
                    <h2>About The Role</h2>
                    <p>As an Netsute Stock Analyst, you will be responsible for managing inventory data in Netsuite, including tracking stock levels, analyzing trends, and making recommendations for improving inventory management. Ensuring that the system is an accurate and true representation of the our stock position, you will become the go to person between supply chain and finance, helping fill the data/knowledge gap from both sides

    Joining a global team of like minded people, with a can do, entrepreneurial, approach to their work, you can create processes and data flows which can immediately impact and benefit the day to day running of the business.</p>
                </div>
                <div className="whatYoudo">
                    <h2>What will you do ?</h2>
                    <p>Using accounting software to generate reports and analyzing inventory reports to identify and resolve any discrepancies or variances.
    Assisting with the month-end process by posting and reporting financial data.
    Managing the product cost matrix and analyzing margins to ensure profitability.
    Collaborating closely with department managers to optimize financial outcomes, such as product profitability.</p>
                </div>
                <div className="whoYouAre">
                    <h2>Who you are ?</h2>
                    <p>You have 3-5 years’ experience in any finance role
    You have experience with ERP account systems, preferably Oracle NetSuite (Preferred)
    You have experience with stock accounting, reconciliations, bookkeeping, accruals etc.
    You are detail-oriented and meticulous 
    You are a “numbers person”</p>
                </div>
                <div>
                    <button onClick={() => setTrigger(true)} className="apply">Apply</button>
                </div>

            </div>
            {trigger && <div className="popup"><PopUp /></div>}
        
        </div>
        
        
    );
}
 
export default JobPage;