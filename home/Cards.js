import React from 'react'
import  {FaTruckMoving} from 'react-icons/fa';


function cards() {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card shadow-lg">
                        <FaTruckMoving size={65} className="card-img-top mt-4" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Transportation</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo dicta est, saepe quisquam laudantium in recusandae modi, at quibusdam asperiores aliquid dolor! Quibusdam qui error quod, assumenda dicta quo.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <img src="..." className="card-img-top mt-4" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim placeat, voluptates voluptate a consectetur ducimus accusamus eos ullam nulla ad neque corrupti optio obcaecati, fuga reiciendis esse voluptatem! Fugiat.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <img src="..." className="card-img-top mt-4" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eaque nam. Labore corporis harum molestiae facilis sequi illum, ad minima natus nobis quam, officia blanditiis impedit. Sapiente eaque doloribus nam?</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default cards