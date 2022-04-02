import {InputAdornment,CardContent,Card,Grid,Typography, TextField, withStyles } from '@material-ui/core';
import React, {Component} from 'react';
import img1 from './../assets/img-1.png';
import icon1 from './../assets/icons/icon-1.png';
import icon2 from './../assets/icons/icon-2.png';
import icon3 from './../assets/icons/icon-3.png';
import icon4 from './../assets/icons/icon-4.png';
import authimg from './../assets/icons/authimg.png';
import convinlogo from './../assets/icons/convinlogo.svg'
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
                <div style={{width: '80%', margin: '0 50px', padding: '0px 0px 25px'}} >
                    <h1 style={{color: '#333333', fontSize: '25px'}}>{item.head}</h1>
                    <p style={{marginTop: 20, fontSize: '20px', color: '#626876'}} >{item.body}</p>
                </div>
            </div>
        );
    }

    pointcontent = (item, i) => {
        return(
            <div style={{padding: '10px 0'}} >
                <div style={{display: 'flex', justifyContent: 'left', textAlign: 'left'}}>
                    <h2 style={{fontSize: '1.5vw', fontWeight: '800', }} >{'0'+i+'.'}</h2>
                    <h2 style={{fontSize: '1.5vw',fontWeight:'300', margin: 'auto 30px'}}>{item}</h2>
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

                        <h1 style={{ fontWeight: '900', color: '#333333'}}>
                            Why should you invest time in reading the eBook?
                        </h1>
                        <p  style={{fontSize: '1vw', color: '#626876', lineHeight: '35px', fontWeight: 500, marginTop: '15px'}}>
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



                <div  style={{backgroundColor: 'white', marginBottom: '5%',paddingLeft:'220px' }}>
                    <div  className='coloredback' >
                        <h1 style={{color: '#f1f2f2', fontWeight: '800', fontSize: '30px', textAlign: 'center'}} >What's Inside?</h1>
                        <p style={{fontSize: '20px', textAlign: 'center',width: '90%', margin: '10px auto', color: '#f1f2f2'}} >
                            Our mission is not to leave you hanging but deliver practical and straightforward advice on making it big with the 
                            accounts involving C-level executives. This means improving the selling approach immediately. To achieve our mission, 
                            we came up with a game plan for selling to the C-level executives, and it includes;
                        </p>
                        <div style={{color: '#f1f2f2', textAlign: 'center',width: '55%', margin: '4% auto 0'}}>
                            {points.map((item, i) => {
                                return this.pointcontent(item, i+1);
                            })}
                        </div>
                    </div>
                </div>


            <div style={{paddingLeft:'220px'}}> 
                <div className='backimg' >
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
            </div>


                <div style={{margin: '10% auto 5%', width: '40%', textAlign: 'center'}}>

                    <h1 style={{color: '#333333', fontSize: '30px', fontWeight: '700'}}>
                        Did You Know?
                    </h1>
                    <h2 style={{margin: '10px auto', color: '#626876', fontSize: '20px', fontWeight: '500', lineHeight: '30px'}} >
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

                <div style={{display: 'flex', justifyContent: 'space-evenly', paddingLeft:"200px"}}>
                    <div className='auth'>
                        <img class="card-img-left example-card-img-responsive" src={authimg}/>
                    </div>    
                    <div className='auth'>
                        <a style={{fontSize: '15px', color:'blue'}}>The Author</a>
                        <h2>Abhishika Chatterje</h2>
                        <p style={{maxWidth:'800px',color: '#626876',fontWeight:'500px',lineHeight: '30px'}}>Abhishikha is a marketing professional with over three years of experience in content writing. She's currently on a mission to create content that will help a salesperson overcome obstacles.</p>
                    </div>
                </div>

              




<footer class="footer">
<div>
<a href="#"> <img src={convinlogo} /></a>
</div>
<div class="container bottom_border">
<div class="row">
<div class=" col-sm-4 col-md col-sm-4  col-12 col">
<h5 class="headin5_amrc col_white_amrc pt2">Company</h5>

<p class="mb10">Aout us</p>
<p class="mb10">Career</p>
<p class="mb10">Sales Gambit</p>
<p class="mb10">Press</p>
<p class="mb10">Success Stories</p>
<p class="mb10">Blogs</p>
<p class="mb10">Ebooks</p>
<p class='mb10'>Pricing</p>


</div>


<div class=" col-sm-4 col-md  col-6 col">
<h5 class="headin5_amrc col_white_amrc pt2">United States of America</h5>

<ul class="footer_ul_amrc">
<li><a href="#">2093 PHILADELPHIA PIKE #5025 CLAYMONT, DELAWARE 19703</a></li>
<li><a href="#">PHONE: (+1) 6282095776</a></li>
<h5 class="headin5_amrc col_white_amrc pt2">India</h5>
<li><a href="#">BUILDING #79, BALAJI NAGAR SG PALYA, BENGALURU, 560029</a></li>
<li><a href="#">PHONE1: +91-7011464590</a></li>
<li><a href="#">PHONE2: +91-8802881329</a></li>
<h5 class="headin5_amrc col_white_amrc pt2">Email</h5>
<li><a href="#">contact@convin.ai</a></li>
</ul>

</div>


<div class=" col-sm-4 col-md  col-6 col">
<h5 class="headin5_amrc col_white_amrc pt2">Products</h5>

<ul class="footer_ul_amrc">
<li><a href="#">Sales Productivity</a></li>
<li><a href="#">Tool</a></li>
<li><a href="#">Call Center</a></li>
<li><a href="#">Recording Solution</a></li>
<li><a href="#">Sales Monitoring</a></li>
<li><a href="#">System</a></li>
<li><a href="#">Sales Stratergy</a></li>
<li><a href="#">Software</a></li>
<li><a href="#">Sales Engagement Software</a></li>
<li><a href="#">Record and Log</a></li>
<li><a href="#">Call on CRM</a></li>
<li><a href="#">Call Recording Software</a></li>
<li><a href="#">Sales Management</a></li>
<li><a href="#">Convin Vs Gong</a></li>
<li><a href="#">Convin Vs Wingman</a></li>
<li><a href="#">Convin Vs Jiminny</a></li>
</ul>


</div>
<div class=" col-sm-4 col-md  col-6 col">
<h5 class="headin5_amrc col_white_amrc pt2">  </h5>
<ul class="footer_ul_amrc">
  <li><a href="#">Sales Acceleration Software</a></li>
  <li><a href="#">Call Center Recording Solution</a></li>
  <li><a href="#">Sales Optimization Software</a></li>
  <li><a href="#">Sales Automation software</a></li>
  <li><a href="#">Sales Pipeline Management</a></li>
  <li><a href="#">Sales Engagement Software</a></li>
  <li><a href="#">Automation Quality Mangement</a></li>
  <li><a href="#">Sales Tracking Software</a></li>
  <li><a href="#">Sales Recording Software</a></li>
  <li><a href="#">Sales Management Software</a></li>
  <li><a href="#">Sales Enablement Software</a></li>
  <li><a href="##">Convin Vs Chorus.ai</a></li>
  <li><a href="#">Convin Vs Salesloft</a></li>
</ul>
</div>


<div class=" col-sm-4 col-md  col-12 col">
<h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>


<ul class="social_footer_ul">
<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
<li><a href="#"><i class="fab fa-twitter"></i></a></li>
<li><a href="#"><i class="fab fa-linkedin"></i></a></li>
<li><a href="#"><i class="fab fa-instagram"></i></a></li>
</ul>


</div>
</div>
</div>


<div class="container">
<ul class="foote_bottom_ul_amrc">
<li><a href="#">Terms and Conditions</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Security</a></li>

</ul>

<p class="text-center"><a href="#">* Refund Policy    </a><a href="#">* Cancellation Policy     </a><a href="#">* Dispute Policy  </a> <a href="#">* Return Policy</a></p>

</div>

</footer>


<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            </div>

        )
    }
}

export default Body;