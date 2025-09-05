
<?php
include_once("HTML/FormPersister.php"); 

if(trim($_POST["name"])!="") {
	setcookie("LOVEME_LIVE_NAME", $_POST["name"], time()+10*24*60*60);
}

if(trim($_POST["name"])=="" && trim($_COOKIE["LOVEME_LIVE_NAME"])!="") $_POST["name"]=trim($_COOKIE["LOVEME_LIVE_NAME"]);

if(trim($_POST["name"])!="" &&
   trim($_POST["message"])!=""
) {
	@mysql_connect('db','loveme_search','SearchMePlea3e');
	@mysql_select_db('loveme_search');
	@mysql_query("insert into quest (name, email, message, CDate, IP) values ('".addslashes($_POST["name"])."', '".addslashes($_POST["email"])."', '".addslashes($_POST["message"])."', NOW(), '".addslashes($_SERVER["REMOTE_ADDR"])."')");
	@mysql_close();
	@mail("live@loveme.com", "Live questionarrie", "A question from ".addslashes($_POST["name"])." (".addslashes($_POST["email"])."):\n".addslashes($_POST["message"])."\n");
	?>
<html>
<head>
<title>Thank You for Submitting Your Question or Comment!</title>

<script language="javascript" type="text/javascript"> 
 function windowClose() { 
 window.open('','_parent',''); 
 window.close();
 } 
 </script>
 
</head>
<body style="font-family:Arial, Helvetica, sans-serif; font-size:14px;">
<CENTER>
<TABLE Width="95%">
<TR>
	<TD>
<center>
<h2>Thank you for submitting your<br>question to our Seminar Hosts.</h2>
</center>

<P>
It is our intention to answer ANY and ALL questions submitted during our seminar if at all possible.  Unfortunately, due to the fact that this is not one of our normal "in person" seminars, we may not be able to do that today.
</P>
<P>
If we are unable to address your question during our live show, a memeber of our staff will respond to you within 48 hours of our seminar or sooner if you have provided an email address.  You may also feel free to call our office anytime during normal business hours at (602) 553-8178.  
</P>	
<P>
<strong>We appreciate your participation!</strong>
Please close this window and enjoy the seminar.  You are welcome to submit multiple questions throughout the seminar.
</P>

<br><br>

<center>
<input type="button" value="Close Window and Return" onClick="windowClose();" style="background-color:#07a007; font-size:16px; color:#fff; padding:7px; border-radius: 8px;">
</center>



</center>


</TD>
</TR>
</TABLE>

</CENTER>

</body></html>
<?php
	die();
}
ob_start(array('HTML_FormPersister', 'ob_formPersisterHandler'));

?>
<html>
<head>
<title>Submit Your Question NOW REAL TIME!</title>

<script language="javascript" type="text/javascript"> 
 function windowClose() { 
 window.open('','_parent',''); 
 window.close();
 } 
 </script>
 

<STYLE TYPE="text/css">
.BOXall {
	border: 1px solid #000000;
}
</STYLE>

</head>
<body style="font-family:Arial, Helvetica, sans-serif; font-size:14px;">
<CENTER>
<TABLE  Width="95%">
<TR>
	<TD><center>


<h4 align="center" style="font-size:16px;">Submit Your Question(s) to our Hosts</h4>

<p align="center">
Complete and submit this form to send an instant text message.
</p>



<form method="POST">
<table style="width:450px;">
<tr>
<td width="100" style="text-align: right" valign="top">*<strong>Your Name</strong>: </td>
<td width="350" style="text-align: left; font-size:12px;"><input class="BOXall" type="text" name="name" size="45" /><br>
<div style="margin-top:5px;">
REQUIRED. First name - Full name optional. We do<br>not announce surnames during the seminar. 
</div>
</td>
</tr>
<tr>
<td style="text-align: right" valign="top"><strong>Your Email</strong>:
</td>
<td style="text-align: left"><input class="BOXall" type="text" name="email" size="45" />
<br>
<div style="margin-top:5px;">
<b>RECCOMENDED</b> Only required for response if we cannot get to your question during the live show.
</div>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: left" valign="top">*<strong>Your Question(s) and/or Comments REQUIRED</strong>: 
<div style="margin-top:5px;">
If possible, please also tell us where you are from (hometown, state, country)
</div>
</td>
</tr><tr>
<td colspan="2" style="text-align: left"><textarea class="BOXall"  name="message" rows="10" cols="60"></textarea></td>
</tr>
<tr>
<td colspan="2" style="text-align: center">
<br>
	<input type="submit" name="clnsend" value="Send Question Now" style="background-color:#07a007; font-size:16px; color:#fff; padding:7px; border-radius: 8px;" />
</td>
</tr>
<td colspan="2" style="text-align: center"><input type="button" value="Not Now - Close Window and Return" onClick="windowClose();" style="background-color:#07a007; font-size:16px; color:#fff; padding:7px; border-radius: 8px;"></td>
</tr>
</table>
</form>



</center>
</TD>
</TR>
</TABLE>
</CENTER>

</body></html>
