<?php 
    
    function timeFromNow($milestone){
        
        // http://stackoverflow.com/questions/2040560/finding-the-number-of-days-between-two-dates

        $now = time(); // or your date as well
        //$your_date = strtotime("2010-01-01");
        $your_date = strtotime($milestone);
        $datediff = $now - $your_date;
        $daysFromNow = floor($datediff/(60*60*24));

        if($daysFromNow < 0){
            return '&mdash;' . abs($daysFromNow) . " days from now";    
        }else{
            return;
        }
        
    }

?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>    
    <title>Adventist.org Project Hub</title>
   
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="description" content="" />

    <!-- http://blog.javierusobiaga.com/stop-using-the-viewport-tag-until-you-know-ho -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link href="http://fonts.googleapis.com/css?family=Karla:400,700,400italic" rel="stylesheet" type="text/css" />
    <link href="c/project-hub.css" rel="stylesheet" type="text/css" />

</head>

<body>

    <div class="wrap clearfix">


        <div class="page-header-wrap">

            <header class="page-header" role="banner">
                <h1 class="page-header-title">General Conference of Seventh-Day Adventists</h1>
                <h2 class="page-header-subtitle">Pattern Library &amp; Style Guide Project Hub</h2>
            </header>       

        </div><!-- .page-header-wrap -->



        <section role="main" class="main">

            <article class="entry entry-future">
            
                <h1 class="entry-title">Handoff</h1>
                <p class="entry-date">April 19, 2016<?php echo timeFromNow('2016-04-19'); ?></p>
                    
            </article><!-- .entry -->

            <article class="entry entry-latest">
            
                <h1 class="entry-title">Tech Approach Document</h1>
                <p class="entry-date">April 18, 2016<?php echo timeFromNow('2016-04-18'); ?></p>
                <ul>
                    <li><a href="../presentations/sda-techApproach.pdf">Tech Approach Document</a> (<abbr title="Portable Document Format">PDF</abbr>, 59 <abbr title="Kilobyte">KB</abbr>)</li>
                </ul>
                    
            </article><!-- .entry -->

            <article class="entry entry-future">
            
                <h1 class="entry-title">Style Guide + Final Pattern Creation</h1>
                <p class="entry-date">April 4&ndash;15, 2016<?php echo timeFromNow('2016-04-15'); ?></p>
                    
            </article><!-- .entry -->

            <article class="entry">
            
                <h1 class="entry-title">Blog Post</h1>
                <p class="entry-date">April 15, 2016<?php echo timeFromNow('2016-04-15'); ?></p>
                
                <p><a href="https://www.adventist.io/2016/04/measuring-what-we-do/">Measuring What We Do</a>, by Brent Hardinge</p>
                    
            </article><!-- .entry -->

            <article class="entry">
            
                <h1 class="entry-title">Blog Post</h1>
                <p class="entry-date">April 7, 2016<?php echo timeFromNow('2016-04-07'); ?></p>
                
                <p><a href="https://www.adventist.io/2016/04/adventist-living-pattern-system/">Adventist Living Pattern System</a>, by Brent Hardinge</p>
                    
            </article><!-- .entry -->

            <article class="entry">
            
                <h1 class="entry-title">Blog Post</h1>
                <p class="entry-date">April 1, 2016<?php echo timeFromNow('2016-04-01'); ?></p>
                
                <p><a href="https://www.adventist.io/2016/04/who-we-are-building-for/">Who We Are Building For</a>, by Brent Hardinge</p>
                    
            </article><!-- .entry -->

            <article class="entry">
            
                <h1 class="entry-title">Blog Post</h1>
                <p class="entry-date">March 28, 2016<?php echo timeFromNow('2016-03-28'); ?></p>
                
                <p><a href="https://www.adventist.io/2016/03/its-happening/">It&rsquo;s Happening</a>, by Brent Hardinge</p>
                    
            </article><!-- .entry -->

            <article class="entry">
            
                <h1 class="entry-title">Design Exploration</h1>
                <p class="entry-date">March 21&ndash;April 8, 2016<?php echo timeFromNow('2016-04-08'); ?></p>
                <ul>
                    <li><a href="../review/palettes.png">Color Palettes</a> (<abbr title="Portable Network Graphics">PNG</abbr>, 201 <abbr title="Kilobyte">KB</abbr>)</li>
                    <li><a href="../review/07-emperor.png">Color Presets Example - Emperor</a> (<abbr title="Portable Network Graphics">PNG</abbr>, 7.3 <abbr title="Megabyte">MB</abbr>)</li>
                </ul>
                    
            </article><!-- .entry -->

            <article class="entry entry-latest">

                <h1 class="entry-title">Pattern Audit + Pattern Creation</h1>

                <p class="entry-date">March 21&ndash;April 1, 2016<?php echo timeFromNow('2016-04-01'); ?></p>
                <ul>
                   <li><a href="http://adventist.superfriend.ly/patternlab/public/">Adventist Living Pattern System</a></li> 
                </ul>
                    
            </article><!-- .entry -->            
             
            <article class="entry entry-latest">
            
                <h1 class="entry-title">Seventh-day Adventist Manifesto</h1>
                <p class="entry-date">March 28, 2016<?php echo timeFromNow('2016-03-28'); ?></p>
                <ul>
                    <li><a href="../review/sda_manifesto_v1.pdf">SDA Manifesto</a> (<abbr title="Portable Document Format">PDF</abbr>, 104 <abbr title="Kilobyte">KB</abbr>)</li>
                    <li><a href="../personas/Personas_AdventistOrg.pdf">User Personas</a> (<abbr title="Portable Document Format">PDF</abbr>, 112 <abbr title="Kilobyte">KB</abbr>)</li>
                    <li><a href="https://docs.google.com/spreadsheets/d/1OVPAw5wqr22ViRcLPcDPEo9T7p-3QOUAlX7Y80ZvP2c/edit?usp=sharing">OKR Spreadsheet</a></li>
                </ul>
                    
            </article><!-- .entry -->

            <article class="entry entry-latest">
            
                <h1 class="entry-title">Kickoff</h1>
                <p class="entry-date">March 16&ndash;17, 2016<?php echo timeFromNow('2016-03-16'); ?></p>
                <ul>
                    <li><a href="../presentations/Kickoff Presentation - Research Insights.pdf">Research Insights</a> (<abbr title="Portable Document Format">PDF</abbr>, 3.3 <abbr title="Megabyte">MB</abbr>)</li>
                    <li><a href="../presentations/emergent-themes.pdf">Emergent Themes</a> (<abbr title="Portable Document Format">PDF</abbr>, 2.6 <abbr title="Megabyte">MB</abbr>)</li>
                    <li><a href="../presentations/pattern-primer.pdf">Pattern Primer</a> (<abbr>PDF</abbr>, 25 <abbr>KB</abbr>)</a></li>
                    <li><a href="../presentations/evangelizing-governing-design-systems.pdf">Evangelizing &amp; Governing Design Systems</a>  (<abbr>PDF</abbr>, 13.7 <abbr>MB</abbr>)</li>
                    <li><a href="http://demo.patternlab.io/">Demo Pattern Lab</a></li>
                    <li><a href="http://bit.ly/1TXarCb">A Design System Isn't a Project - It's a Product</a></li>
                    <li><a href="http://bit.ly/1Pjg3Pl">Design System Ops</a></li>
                    <li><a href="https://www.youtube.com/watch?v=1OKZOV-iLj4">Harry Roberts - Managing CSS Projects w ITCSS</a></li>
                </ul>
                    
            </article><!-- .entry -->


            

            <article class="entry">
            
                <h1 class="entry-title">Kickoff prep</h1>
                <p class="entry-date">March 11, 2016<?php echo timeFromNow('2016-03-11'); ?></p>
                    
            </article><!-- .entry -->

            <article class="entry">
            
                <h1 class="entry-title">Persona creation</h1>
                <p class="entry-date">March 2, 2016<?php echo timeFromNow('2016-03-02'); ?></p>

            </article><!-- .entry -->

            <article class="entry">
            
                <h1 class="entry-title">Collating research findings</h1>
                <p class="entry-date">March 2, 2016<?php echo timeFromNow('2016-03-02'); ?></p>
                    
            </article><!-- .entry -->

            <article class="entry">

                <h1 class="entry-title">GAiN Conference</h1>
                <p class="entry-date">Februrary 26, 2016<?php echo timeFromNow('2016-02-26'); ?></p>

                <p><a href="http://d.pr/f/18xJD">Dan Mall&rsquo;s Slide deck (PDF&mdash;40.7MB)</a></p>
                    
            </article><!-- .entry -->

            <article class="entry">

                <h1 class="entry-title">Stakeholder Interviews &amp; Participant Research</h1>
                <p class="entry-date">Februrary 26, 2016<?php echo timeFromNow('2016-02-26'); ?></p>
                    
            </article><!-- .entry -->


        </section><!-- .main -->

    </div><!-- .wrap -->

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="j/project-hub.js"></script>
    

</body>
</html>

    