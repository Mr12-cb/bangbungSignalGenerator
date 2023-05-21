cfg.Dark
cfg.MUI

function About()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY")

        apb = MUI.CreateAppBar("Bangbung Official", "menu")
        apb.SetOnMenuTouch(OnMenuTouch)
        apb.SetOnControlTouch(OnControlTouch)
CreateDrawer()
	app.AddDrawer( drawerScroll, "Left", drawerWidth )
        var apbHeight = apb.GetHeight()

        scr = app.CreateScroller(1, 1, "NoScrollBar")
            pageLay = MUI.CreateLayout("Linear")
            pageLay.SetSize(1, 1.5)
            pageLay.SetPadding(0, 0, apbHeight, 0)
                var tx = ""
                 txt = app.CreateText( "", 0.8, -1,  )
 
 
 
 
 
 
 
  pageLay.AddChild( txt )
     pageLay.AddChild( MUI.CreateTextParagraph(tx) )
           pageLay.AddChild( MUI.CreateTextParagraph(tx) )
            scr.AddChild(pageLay)
            //about
            img= app.CreateImage( "Img/trading.png", 0.5 )
          pageLay.AddChild( img ) 
            
               var text = "<p><b><t>Aplikasi Signal Real Market</b></t><br>" + 
    "<br>Apliasi Signal ini memberikan Signal-Signal real market untuk gambaran pemasangan dalam trading</p>" + 
    "Untuk referensi bisa kunjungi :<br>" + 
    "Youtube : Bangbung Official<br>" +
    "Blog  : Mekanikcode.blogspot.com" ;
    txt = app.CreateText( text, 0.8, -1, "Html,Link" )
    txt.SetMargins( 0, 0.02, 0, 0 )
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 )
    txt.SetTextSize( 20 )
    txt.SetTextColor( "white" )
    pageLay.AddChild( txt )
            
            
            
            
            
            
   
            
            
            
               txt = app.CreateText( "Created By Bangbung Official", 0.8, -1,  )
 txt.SetTextSize( 10 )
  pageLay.AddChild( txt )
                
                  
                    
                      
                          lay.AddChild(scr)
        lay.AddChild(apb)

    app.AddLayout(lay)
}



function con()
{
    var list = ["Email :email", "Facebook:facebook", "Whatsapp:", "Telegram:"]
    lst = MUI.CreateMenuWithIcon(list, null, null, "Top, Right")
    lst.SetOnSelect(OnSelect)
       lst.Show()
}

function ShowMenu()
{
    lst.Show()
}

function OnSelect(choice, index)
{
    app.ShowPopup(choice+" : "+index)
}