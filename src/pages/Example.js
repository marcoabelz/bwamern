import React, {Component} from 'react';

import { InputDate, InputNumber } from "elements/Form/index"; //import index.js dari folder Form. { nama fle yg dipakai } cth {InputDate, InputNumber}
import Breadcrumb from 'elements/Breadcrumb';

export default class Example extends Component {
    render () {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" }
        ];

        return (
            <div className="container">
                <div 
                    className="row align-items-center justify-content-center"
                    style ={{ height: "100vh" }}
                >
                    <div className="col-auto">
                        <Breadcrumb data={breadcrumb} />
                    </div>
                </div>
            </div>
        );
    }
}

    // state = {
    //     value: {
    //         startDate: new Date(),
    //         endDate: new Date(),
    //         key: "selection"
    //     }
    // };

//     handleChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     render() {
//         return (
//             <div className="container">
//                 <div 
//                     className="row align-items-center justify-content-center"
//                     style ={{ height: "100vh" }}
//                 >
//                     <div className="col-auto">
//                     <InputDate
//                         max={30}
//                         onChange={this.handleChange}
//                         name="value"
//                         value={this.state.value}
//                     />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }