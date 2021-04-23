import React, {Component} from "react";
import "./Gallery.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';


import axios from "axios";
import arrowLeft from "../Assets/Images/Icon awesome-angle-left.svg";
import arrowRight from "../Assets/Images/Icon awesome-angle-right.svg";
import star from "../Assets/Images/Icon material-star.svg";

class Gallery extends Component{
    state={
        minSlice:0,
        maxSlice:3,
        shoppings:[],
        matches:[]
    }

    componentDidMount(){
        axios.get('./test.json')
        .then(res=>{
            const matches=res.data.matches
            const shoppings=res.data.shoppings
            this.setState({matches,shoppings})
        }).catch(err=>{
            alert(err)
        })

        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    
    moveRight=(max,maxVal)=>{
        if(max<maxVal){
            this.setState(prevState => ({
                minSlice: prevState.minSlice + 1,
                maxSlice: prevState.maxSlice + 1 
            }))
        }
    }

    moveLeft=(min)=>{
        if(min>0){
            this.setState(prevState => ({
                minSlice: prevState.minSlice - 1,
                maxSlice: prevState.maxSlice - 1 
            }))
        }
    }

    updateDimensions() {
        if(window.innerWidth < 1600) {
            this.setState({minSlice:0, maxSlice:3 });
        }

        if(window.innerWidth < 1300) {
          this.setState({minSlice:0, maxSlice:2 });
        }

        if(window.innerWidth < 1005) {
            this.setState({minSlice:0, maxSlice:1 });
        }
    }

    render(){
        let picture=''
        let picLength=0

        this.props.title=='مسابقات' ? picLength=this.state.matches.length : picLength=this.state.shoppings.length

        this.props.title=='مسابقات'
        ?
            picture=this.state.matches.slice(this.state.minSlice,this.state.maxSlice).map(pic=>{
                return(
                    <div key={pic.id} className="picture">
                        <div className="mainImage">
                            <img src={pic.imageSource} alt="Cinque Terre" width="533" height="300" />
                        </div>
                        <div className="caption">
                            <h4>{pic.title}</h4>
                            <p>
                            {pic.text}
                            </p>
                        </div>
                        <div className='buttons'>
                            <button className='details'>مشاهده جزئیات</button>
                            <button className='signUp'>ثبت نام</button>
                        </div>
                    </div>
                )
            })
        :
            picture=this.state.shoppings.slice(this.state.minSlice,this.state.maxSlice).map(pic=>{
                return(
                    <div key={pic.id} className="picture">
                        <div className="mainImage">
                            <img src={pic.imageSource} alt="Cinque Terre" width="533" height="300" />
                        </div>
                        <div className="caption">
                            <div className='star'>
                                <h2>{pic.title}</h2>
                                <p><img src={star} />{pic.star}</p>
                            </div>
                            <p className='price'>تومان {pic.price}</p>
                        </div>
                    </div>
                )
            })
        let arrowLeftActivate='arrowActive'
        let arrowRightActivate='arrowActive'

        if(this.state.minSlice!=0){
            arrowLeftActivate='arrowNotActive'
        }
        if(this.state.maxSlice<picLength){
            arrowRightActivate='arrowNotActive'
        }
        return(
            <>
                <section className="gallery">
                    <h3>{this.props.title}<div className='horizontalLine'></div></h3>
                    <h4>مشاهده همه</h4>
                    <button className={arrowLeftActivate+" arrowLeft"} onClick={()=>this.moveLeft(this.state.minSlice)}>
                        <img src={arrowLeft} />
                    </button>
                    {picture}
                    <button className={arrowRightActivate+" arrowRight"} onClick={()=>this.moveRight(this.state.maxSlice,picLength)}>
                        <img src={arrowRight} />
                    </button>
                </section>
            </>
        )
    }
}

export default Gallery;
