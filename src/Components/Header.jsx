export default function Header(){


    return(
        <header id="mu-header" class="" role="banner">
    <div class="container">
        <nav class="navbar navbar-default mu-navbar">
      <div class="container-fluid">
      
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

        
          <a class="navbar-brand" href="#">B.Khanal</a>

      
           {/* <a class="navbar-brand" href="#"><img src="assets/images/logo.png"/></a>  */}


        </div>

        
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav mu-menu navbar-right">
                <li><a href="#">HOME</a></li>
                <li><a href="#mu-about">ABOUT ME</a></li>
                <li><a href="#mu-service">SERVICES</a></li>
                <li><a href="#mu-portfolio">PORTFOLIO</a></li>
                <li><a href="#mu-contact">CONTACT</a></li>
              </ul>
        </div>
      </div>
    </nav>
    </div>
</header>
    )
}

