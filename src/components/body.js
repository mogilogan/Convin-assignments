import { InputAdornment, TextField, withStyles } from '@material-ui/core';
import React, {Component} from 'react';
import img1 from './../assets/img-1.png';
import icon1 from './../assets/icons/icon-1.png';
import icon2 from './../assets/icons/icon-2.png';
import icon3 from './../assets/icons/icon-3.png';
import icon4 from './../assets/icons/icon-4.png';
import './body.css';

const CssTextField = withStyles({

    root: {
        '& label.Mui-focused': {
            color: 'transparent',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'transparent',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: 'transparent',
            },
            '&:hover fieldset': {
            borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
            borderColor: 'transparent',
            },
        },
        },
    })(TextField);

    const content = [
        {
            head: 'The more senior executives are involved, the better....',
            body: '…not the power and authority, but their decision-making skills and influence make them a preferred buyer choice.'
        },
        {
            head: 'CXO buyers accelerate decision-making…',
            body: '…as they decide in fewer meetings and waste minimum time talking and discussing. Their absence can stall or delay sales deals.'
        },
        {
            head: 'C-level executives are entering buying cycles faster…',
            body: '…since the beginning of the pandemic and impacting the decision-making process. In some cases, CXOs enter sales discussions unannounced.'
        },
        {
            head: 'Most sellers find themselves stressed...',
            body: '…losing sleep before the night of a sales meeting with a CXO of an Enterprise company, impacting the meeting and performing poorly.'
        }
    ];

    const points = [
        'A brief introduction to the C-suite and their struggles',
        'The Importance of Facing the C-suite Buyer',
        '10 Selling tips to handle C-suite meetings',
        'A handy list of exercises to sharpen your skills',
        'A comprehensive meeting checklist before meeting the C-suite executive'
    ]
  class Body extends Component {

    iconcontent = (item, i) => {
        var img;
        switch(i){
            case 1: img=icon1;
                    break;
            case 2: img=icon2;
                    break;
            case 3: img=icon3;
                    break;
            case 4: img=icon4;
                    break;
        }

        return (
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 40}} >
                <img src={img} style={{width: 75, height: 75, background: 'lightYellow', padding: '10px', margin: 'auto', marginTop: 0}}/>
                <div style={{width: '80%', margin: '0 50px'}} >
                    <h1 style={{color: '#333333', fontSize: '38px'}}>{item.head}</h1>
                    <p style={{marginTop: 20, fontSize: '26px', color: '#626876'}} >{item.body}</p>
                </div>
            </div>
        );
    }

    pointcontent = (item, i) => {
        return(
            <div style={{padding: '10px 0'}} >
                <div style={{display: 'flex', justifyContent: 'left', textAlign: 'left'}}>
                    <h2 style={{fontSize: '3.4vw', fontWeight: '700', }} >{'0'+i+'.'}</h2>
                    <h2 style={{fontSize: '1.8vw', margin: 'auto 30px'}}>{item}</h2>
                </div>
                <div style={{borderBottom: '2px solid #f1f2f2', opacity: 0.5, width: '100%', margin: '10px auto'}} />
            </div>
        );
    }

      render() {
        
        return(
            <div>
                <div className='banner' style={{}}>
                    <div className='left'>
                        <h1 style={{fontSize: '3.1vw', fontWeight: '650', margin: '0 5px 20px 0'}}>Do you want to conquer your fear of meeting C-suite buyers?</h1>
                        <div style={{paddingTop: '20px', fontSize: '26px'}}>
                            <p style={{marginBottom: 20}} >Enter your email and get your hands on the e-book.</p>
                            <CssTextField
                                placeholder='Enter your Email address...'
                                variant="outlined"
                                size="medium"
                                style={{background: 'white', width: '60%', borderRadius: '10px', padding: '15px 10px'}}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <button className='downbutton'>
                                            DOWNLOAD
                                        </button>
                                    </InputAdornment>,
                                    style: {fontSize: '26px'}
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='section1'>
                    <div style={{width: '40%', paddingTop: 20}} >
                        <h1 style={{fontSize: '2.6vw', fontWeight: '800', color: '#333333'}}>
                            Why should you invest time in reading the eBook?
                        </h1>
                        <p  style={{fontSize: '1.3vw', color: '#626876', lineHeight: '45px', fontWeight: 500, marginTop: '15px'}}>
                            Handling C-suite buyers is a different experience altogether. The expectation mismatch between the executive buyer and 
                            the seller ruptures good deals and stalls them over silly matters. But considering the involvement of C-level guys 
                            faster in sales deals, sellers must learn to conquer their fear and prepare in advance for the C-level buyer.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px'}} >
                            <img src={img1} style={{height: 350, width: 550}}/>
                        </div>
                    </div>
                    <div style={{width: '50%', padding: '10 40'}} >
                        {content.map((item, i) => {
                            return this.iconcontent(item, i+1);
                        })}
                    </div>
                </div>

                <div style={{backgroundColor: 'white', marginBottom: '5%'}}>
                    <div  className='coloredback'>
                        <h1 style={{color: '#f1f2f2', fontWeight: '800', fontSize: '44px', textAlign: 'center'}} >What's Inside?</h1>
                        <p style={{fontSize: '32px', textAlign: 'center',width: '90%', margin: '10px auto', color: '#f1f2f2'}} >
                            Our mission is not to leave you hanging but deliver practical and straightforward advice on making it big with the 
                            accounts involving C-level executives. This means improving the selling approach immediately. To achieve our mission, 
                            we came up with a game plan for selling to the C-level executives, and it includes;
                        </p>
                        <div style={{color: '#f1f2f2', textAlign: 'center', width: '60%', margin: '4% auto 0'}}>
                            {points.map((item, i) => {
                                return this.pointcontent(item, i+1);
                            })}
                        </div>
                    </div>
                </div>

                <div className='backimg'>
                    <h1 className='coloredh1'>
                        Ready to overcome your fear and face the C-suite buyer?
                    </h1>
                    <h2 style={{width: '55%', margin: '10px auto', textAlign: 'center', color: '#f1f2f2', fontSize: '32px', fontWeight: 'normal'}} >
                        {'Start applying the 10 selling tips to see dramatic changes in your sales outcomes and selling attitude. It’s tried and tested!'}
                    </h2>
                    <div style={{fontSize: '26px', width: '60%', margin: '40px auto'}}>
                        <CssTextField
                            placeholder='Enter your Email address...'
                            variant="outlined"
                            size="medium"
                            style={{background: 'white', width: '100%', borderRadius: '10px', padding: '25px 15px'}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <button className='downbutton'>
                                        DOWNLOAD
                                    </button>
                                </InputAdornment>,
                                style: {fontSize: '26px'}
                            }}
                        />
                    </div>
                </div>

                <div style={{margin: '10% auto 5%', width: '60%', textAlign: 'center'}}>
                    <h1 style={{color: '#333333', fontSize: '52px', fontWeight: '700'}}>
                        Did You Know?
                    </h1>
                    <h2 style={{margin: '10px auto', color: '#626876', fontSize: '26px', fontWeight: '400', lineHeight: '50px'}} >
                        {'Pressure and solitude are permanent companions of CXOs. Unless you know their struggle and circumstances, it’s hard to decode what they expect.'}
                    </h2>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '50px 30px'}} >
                    <div className='card'>
                        <p >
                            A study shows leaders worked 9.7 hours per weekday, on average, and the CEOs worked an average of 62.5 hours a week. 
                            Does that leave time for personal life?
                        </p>
                        <a href='https://hbr.org/2018/07/how-ceos-manage-time?ab=seriesnav-spotlight'>
                            Harvard Business Review
                        </a>
                    </div>
                    <div className='card'>
                        <p>
                            Jeff Kindler, CEO of Pfizer, surprisingly resigned in 2011, citing the 24/7 struggle to meet stakeholder 
                            expectations as the core reason. On the same lines, in a 2018 interview, Elon Musk almost broke down while 
                            talking about the disturbing personal life while leading Tesla.
                        </p>
                        <a href='https://www.frontiersin.org/articles/10.3389/fpsyg.2020.01453/full'>
                            Frontiersin.org
                        </a>
                    </div>
                    <div className='card'>
                        <p>
                            A new poll reveals 72% of CEOs fear losing their jobs in 2022, up from 52% in 2020. 
                            While this worry has undoubtedly always existed for the "big bosses," writes Bloomberg, 
                            this number is "eye-popping high” during the pandemic.
                        </p>
                        <a href='https://www.linkedin.com/news/story/theyre-just-like-us-ceo-job-fears-5206660/'>
                            LinkedIn News
                        </a>
                    </div>
                </div>

                <div style={{height: '250px', backgroundColor: '#1A62F2', marginTop: '80px'}}>

                </div>
            </div>

        )
    }
}

export default Body;