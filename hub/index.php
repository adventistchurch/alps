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
            
                <h1 class="entry-title">Style guide front-end files creation</h1>
                <p class="entry-date">April 15, 2016<?php echo timeFromNow('2016-04-15'); ?></p>
                    
            </article><!-- .entry -->

            <article class="entry entry-future">
            
                <h1 class="entry-title">Design exploration</h1>
                <p class="entry-date">April 7, 2016<?php echo timeFromNow('2016-04-07'); ?></p>
                    
            </article><!-- .entry -->

            <article class="entry entry-future">
            
                <h1 class="entry-title">Site code refactoring</h1>
                <p class="entry-date">March 30, 2016<?php echo timeFromNow('2016-03-30'); ?></p>
                    
            </article><!-- .entry -->

            <article class="entry entry-future">
            
                <h1 class="entry-title">Kickoff</h1>
                <p class="entry-date">March 16, 2016<?php echo timeFromNow('2016-03-16'); ?></p>
                    
            </article><!-- .entry -->

            <article class="entry entry-latest">
            
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

    