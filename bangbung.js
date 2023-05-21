cfg.Dark
cfg.MUI
var tem="/sdcard/tiuumt.txt";
var tm="/sdcard/iymin.txt";


app.LoadScript( "hy.js" )
var		hoje = new Date();


		 	dia = hoje.getDate() ;
			aku=hoje.getMonth();
function OnStart()
{	

//app.Alert( app.FileExists(tem) )


if (app.FileExists(tem)==false){

		
app.WriteFile(tem,aku,"Append" )
app.WriteFile( tm,dia,"Append" )
}
else
			{
			kk= app.ReadFile( tm )
			var			hk=new Date();
			ce=hk.getDate();
			
			if (ce<=kk){
									
												
															
					
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)
app.DeleteFile( "/sdcard/buy.txt" )
app.DeleteFile( "/sdcard/sell.txt" )

app.DeleteFile( "/sdcard/wak.txt" )
app.DeleteFile( "/sdcard/ord.txt" )
app.DeleteFile( "/sdcard/order.txt" )

    lay = MUI.CreateLayout("Absolute", "FillXY,Vcenter")

        apb = MUI.CreateAppBar("Bangbung Official", "menu")
        apb.SetOnMenuTouch(OnMenuTouch)
        apb.SetOnControlTouch(OnControlTouch)
CreateDrawer()
	app.AddDrawer( drawerScroll, "Left", drawerWidth )
        var apbHeight = apb.GetHeight()

        scr = app.CreateScroller(1, 1, "NoScrollBar")
            pageLay = MUI.CreateLayout("Linear")
            pageLay.SetSize(1, 1)
            pageLay.SetPadding(0, 0,0, 0)
                var tx = ""
                 txt = app.CreateText( "", 1, -1,  )
 
  pageLay.AddChild( txt )
     pageLay.AddChild( MUI.CreateTextParagraph(tx) )
           pageLay.AddChild( MUI.CreateTextParagraph(tx) )
            scr.AddChild(pageLay)
            
            img= app.CreateImage( "Img/bangbung.png", 0.5 )
          pageLay.AddChild( img ) 
           txt = app.CreateText( "Asset", 0.8, -1,  )
 
  pageLay.AddChild( txt )
            
            
            
            
pn = MUI.CreateSpinner("GOLD_USD,EUR_USD,EUR_JPY,AUD_NZD,GBP_NZD,EUR_CHF,USD_CHF,CHF_JPY,GBP_USD", 0.6, 0.1)
        pn.SetOnChange(OnChange)
        pageLay.AddChild(pn)
      
              txt = app.CreateText( "Time", 0.8, -1,  )
 
  pageLay.AddChild( txt )
            
            
            
            
spn = MUI.CreateSpinner("M1,M5,M15", 0.6, 0.1)
        spn.SetOnChange(OnChnge)
        pageLay.AddChild(spn)
                    
sp = MUI.CreateSpinner("CALL,PUT", 0.6, 0.1)
   sp.Hide()
        pageLay.AddChild(sp)
          
             btn = MUI.CreateButtonRaisedO("GENERATE", 0.6, 0.1)
           btn.SetOnTouch(un)
        pageLay.AddChild(btn)
               txt = app.CreateText( "Created By Bangbung Official", 0.8, -1,  )
 txt.SetTextSize( 10 )
  pageLay.AddChild( txt )
                
               
                          lay.AddChild(scr)
        lay.AddChild(apb)

    app.AddLayout(lay)
    }
    else{
    perp();
    }
    }
    
}

function OnChange(title){
asu=title;


}

function perp()
{

	devId=app.GetDeviceId()
		app.Alert( "trial habis" )
  app.OpenUrl("whatsapp://send?phone=+6281908075063&text=Saya pengguna dengan ID aplikasi " + devId + "0.Saya mau membeli token perpanjangan untuk 1 minggu");

				
}


function OnChnge(title){
candleTime=title;

}
function OnMenuTouch()
{
    app.OpenDrawer()
    }

function OnControlTouch(text, index)
{
    app.ShowPopup("You click " + text + ": Control index = "+index)
}

function un(){
pn.Gone()
sp.Gone()
spn.Gone()
	app.ShowProgress("Loading...")
    lay = MUI.CreateLayout("Absolute", "FillXY")
app.WriteFile( "/sdcard/order.txt", pn.GetText(), "Append" );
app.WriteFile( "/sdcard/ord.txt", sp.GetText(), "Append" );
app.WriteFile( "/sdcard/wak.txt", spn.GetText(), "Append" );

        apb = MUI.CreateAppBar("Bangbung Official", "menu")
        apb.SetOnMenuTouch(OnMenuTouch)
        apb.SetOnControlTouch(OnControlTouch)
CreateDrawer()
	app.AddDrawer( drawerScroll, "Left", drawerWidth )
        var apbHeight = apb.GetHeight()

        scr = app.CreateScroller(1, 1, "NoScrollBar")
            pageLay = MUI.CreateLayout("Linear")
            pageLay.SetSize(1, 1)
            pageLay.SetPadding(0, 0, 0, 0)
                var tx = ""
                
                  web=app.CreateWebView(0.1,0.1 )
               	web.SetOnProgress( web_OnProgess )
                  web.LoadUrl( "tt.html" )
                  web.Hide()
                    pageLay.AddChild( web )
                      
                  web2=app.CreateWebView(0.1,0.1 )
               //	web2.SetOnProgress( web_OnProgess )
                  web2.LoadUrl( "sel.html" )
                    pageLay.AddChild( web2 )
                      web2.Hide()
                 txt = app.CreateText( "", 1, -1,  )
 
  pageLay.AddChild( txt )
     pageLay.AddChild( MUI.CreateTextParagraph(tx) )
           pageLay.AddChild( MUI.CreateTextParagraph(tx) )
            scr.AddChild(pageLay)
            tt = MUI.CreateButtonRaisedO("LIHAT RESULT", 0.6, 0.1)

 tt.SetOnTouch(tttt )
  pageLay.AddChild( tt )
            
            	
	

               txt = app.CreateText( "Created By Bangbung Official", 1, -1,  )
 txt.SetTextSize( 10 )
  pageLay.AddChild( txt )
  
  
  
  pLay = MUI.CreateLayout("Linear","Horizontal")
       
                
                pageLay.AddChild( pLay )
                      
                          lay.AddChild(scr)
        lay.AddChild(apb)

    app.AddLayout(lay)


}
function tttt(){

 txt.Log( app.ReadFile( "/sdcard/buy.txt" ),"green" )
 txtw.Log( app.ReadFile( "/sdcard/sell.txt" ),"red" )
}
function web_OnProgess( progress )
{
	app.Debug( "progress = " + progress )
	if( progress==100 ) {
	app.HideProgress()
	txt = app.CreateText( "", 0.5,-1, "Log,Monospace" )
	txt.SetBackColor( "black" )
	txt.SetLog( 50000 )
	pLay.AddChild( txt )
		txt.Log( app.ReadFile( "/sdcard/buy.txt" ) )
	txtw = app.CreateText( "", 0.5,-1, "Log,Monospace" )
	txtw.SetBackColor( "black" )
	txtw.SetLog( 50000 )
	pLay.AddChild( txtw )
		txt.Log( app.ReadFile( "/sdcard/sell.txt" ) )
	}
}

function CreateDrawer()
{
    //Create a layout for the drawer.
	//(Here we also put it inside a scroller to allow for long menus)
	drawerWidth = 0.75;
    drawerScroll = app.CreateScroller( drawerWidth, -1, "FillY" )
    drawerScroll.SetBackColor( "white" )
	layDrawer = app.CreateLayout( "Linear", "Left" )
	drawerScroll.AddChild( layDrawer )
	
	//Create layout for top of drawer.
	layDrawerTop = app.CreateLayout( "Absolute" )
	layDrawerTop.SetBackColor( "black" )
	layDrawerTop.SetSize( drawerWidth, 0.23 )
	layDrawer.AddChild( layDrawerTop )
	
	//Add an icon to top layout.
	var img = app.CreateImage( "Img/bangbung.png", 0.15 )
	img.SetPosition( drawerWidth*0.06, 0.04 )
	layDrawerTop.AddChild( img )
	
	//Add user name to top layout.
	var txtUser = app.CreateText( "Bangbung Official",-1,-1,"Bold")
	txtUser.SetPosition( drawerWidth*0.07, 0.155 )
	txtUser.SetTextColor( "White" )
	txtUser.SetTextSize( 13.7, "dip" )
	layDrawerTop.AddChild( txtUser )
	
	//Add user email to top layout.
	txtEmail = app.CreateText( "bagast02022000@gmail.com")
	txtEmail.SetPosition( drawerWidth*0.07, 0.185 )
	txtEmail.SetTextColor( "#bbffffff" )
	txtEmail.SetTextSize( 14, "dip" )
	layDrawerTop.AddChild( txtEmail )
	
	//Create menu layout.
	var layMenu = app.CreateLayout( "Linear", "Left" )
	layDrawer.AddChild( layMenu )
	
    //Add a list to menu layout (with the menu style option).
    var listItems = "Home::[fa-home],Contact Me::[fa-users],About::[fa-tag]";
    lstMenu1 = app.CreateList( listItems, drawerWidth, -1, "Menu,Expand" )
    lstMenu1.SetColumnWidths( -1, 0.35, 0.18 )
    lstMenu1.SelectItemByIndex( 0, true )
    lstMenu1.SetItemByIndex( 0, "Home" )
    lstMenu1.SetOnTouch( lstMenu_OnTouch )
    layMenu.AddChild( lstMenu1 )
    
    //Add seperator to menu layout.
    var sep = app.CreateImage( null, drawerWidth,0.001,"fix", 2,2 )
    sep.SetSize( -1, 1, "px" )
    sep.SetColor( "#cccccc" )
    layMenu.AddChild( sep )
    
    //Add title between menus.

}

//Handle menu item selection.
function lstMenu_OnTouch( title, body, type, index )
{
    //Close the drawer.
    app.CloseDrawer( "Left" )
    if (title=="About"){
    
    About()
    
    
    
    }
    else if(title=="Contact Me"){
    
    con()
    }
     else if(title=="Home"){
    
    OnStart()
    }
}

//Called when a drawer is opened or closed.
function OnDrawer( side, state )
{
    console.log( side + " : " + state )
}

//Called when hardware menu key pressed.
function OnMenu( name )
{  
   app.OpenDrawer()
}