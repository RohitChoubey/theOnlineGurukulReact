import React from 'react'
import '../../css/web/blog_style.css'
import { Link } from 'react-router-dom'

var backgroundImage = 'assets/uploads/blogger_banner/11875268391651750934freelance-young-asian-businesswoman-casual-wear-using-laptop-working-living-room-home.jpg'
function BlogDetails() {

  const url = window.location.href;
  const title = document.title || '';
  return (
    <>
        <div className="blog_details_container">
            <div class="blog_images_banner_top" style={{backgroundImage: `url(${backgroundImage})`, }} >
                <div class="container">
                    <div class="blogtitle"><h2>Planning To Appear In Neet 2022? Read What Toppers Suggest.</h2></div>
                </div>
            </div>

            <div class="container blog_container" style={{marginTop:"30px"}}>
            <div class="row">
                <div class="bloggername col-12 col-sm-12 col-md-12 col-lg-12">
                    <ol class="breadcrumb page-breadcrumb" style={{marginBottom: "0"}}>
                        <li>
                            <svg style={{marginBottom: "-5px"}} aria-hidden="true" focusable="false" width="15" data-prefix="fas" data-icon="blog" class="svg-inline--fa fa-blog fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    fill="#f60"
                                    d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"
                                ></path>
                            </svg>
                            &nbsp;<a class="parent-item" href="https://www.theonlinegurukul.com/blog-list">Blog</a> &nbsp;<i class="fa fa-angle-right"></i>
                        </li>
                        <li class="active">Blog Details</li>
                    </ol>
                </div>
                </div>
            </div>
            <br />
            <div class="container">
                <div class="col-md-10 col-lg-10">
                    <div class="theOnlineGurukul_blog2">
                    <p style={{textAlign:"justify"}}>As per records, approximately 1.6 million students appear in the NEET i.e., "National Eligibility cum Entrance Test" every year &amp; they put in their best efforts &amp; use the best strategies to crack NEET. However, a very smaller number of aspirants crack the exam &amp; very few come in the toppers list. But did you ever think about what different things the toppers do? Which books do they read? How do they maintain balance in their personal life with the outside world? In this post, we are going to tell you all the important facts which will answer your question, “How to crack NEET 2022?”</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="share_blog">
                    <footer>
                        <ul class="share">
                            <li class="webshare">
                                <a href="#webshare">
                                    <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.85 29.51c1.83 0 3.51-.63 4.85-1.67l14.9 7.36v.08a7.86 7.86 0 102.04-5.27l-14.06-6.94a7.98 7.98 0 00.12-1.7l14.54-7.64a7.85 7.85 0 10-2.58-4.92l-14.13 7.42a7.86 7.86 0 10-5.68 13.28" fill="#4A4A4A" />
                                    </svg>
                                    Share 
                                </a>
                            </li>

                            <li>
                                <Link to={"https://twitter.com/intent/tweet?url="+{url}+"&amp;text="+title}>
                                    <svg viewBox="0 0 48 39" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M43 9.7A27.9 27.9 0 010 34.6c5.2.6 10.4-.8 14.6-4-4.3-.2-8-3-9.2-7 1.5.4 3 .3 4.4-.1-4.7-1-8-5.2-7.9-9.8 1.4.8 2.9 1.2 4.5 1.2a9.9 9.9 0 01-3-13.1 28 28 0 0020.2 10.3 9.9 9.9 0 0116.8-9c2.3-.4 4.4-1.3 6.3-2.4a9.9 9.9 0 01-4.4 5.5c2-.3 4-.8 5.7-1.6a20 20 0 01-5 5.1"
                                            fill="#4DC8F1"
                                        />
                                    </svg>
                                    Twitter
                                </Link>
                            </li>

                            <li>
                                <Link to={"https://www.facebook.com/sharer/sharer.php?=u"+url}>
                                    <svg viewBox="0 0 25 48" xmlns="http://www.w3.org/2000/svg"><path d="M25 0v8h-5c-3 0-4 2-4 4v5h8l-1 9h-7v22H7V26H0v-9h7v-6C7 4 12 0 18 0h7z" fill="#4460A0" /></svg> Facebook
                                </Link>
                            </li>

                            <li>
                                <Link to={"https://www.linkedin.com/shareArticle?mini=true&url="+{url}+"&amp;text="+title}>
                                    <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M52 52H41V34c0-5-2-8-6-8s-6 3-6 8v18H19V17h10v5s3-6 10-6c8 0 13 5 13 14v22zM6 13c-3 0-6-3-6-7 0-3 3-6 6-6 4 0 7 3 7 6 0 4-3 7-7 7zM1 52h11V17H1v35z" fill="#007EBB" />
                                    </svg>
                                    LinkedIn
                                </Link>
                            </li>

                            <li>
                                <Link to={"mailto:?subject="+{title}+"&amp;body="+url}>
                                    <svg viewBox="0 0 36 25" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 2.16v20.39c0 1.1.81 2 1.93 2h31.81c1.12 0 1.93-.9 1.93-2V2.16C35.67.95 34.95 0 33.74 0H1.93C.68 0 0 .97 0 2.16m2.93 1.78c0-.5.3-.77.78-.77.29 0 11.85 7.32 12.55 7.75l1.81 1.13c.57-.39 1.15-.72 1.74-1.12 1.22-.77 12.02-7.76 12.31-7.76.48 0 .77.28.77.77 0 .52-1 1.03-1.65 1.43-4.1 2.5-8.2 5.23-12.26 7.82-.24.16-.7.5-1.04.45-.38-.06-12.15-7.62-14.29-8.88-.32-.19-.72-.36-.72-.82"
                                            fill="#999"
                                        />
                                    </svg>
                                    Email
                                </Link>
                            </li>
                        </ul>
                    </footer>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogDetails

