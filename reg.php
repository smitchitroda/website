<style>
	body
	{
		background : gray;		
	}
	h1
	{
		color : red;
	}
</style>
<html>
	<h1>welcome to our group</h1>
</html>
<?php	
	if(isset($_POST['sub']))
	{
		$name = $_POST['name'];
		$site = $_POST['site'];
		$mno = $_POST['mno'];
		$massure = $_POST['massure'];
		
		$insertquery = "insert into registration(Name,Adderss,MobileNo,Massurement) values('$name','$site','$mno','$massure')";
		$conn = mysqli_connect("localhost","root","","furniture");
		$res = mysqli_query($conn,$insertquery);
		if($res)
		{
			?>
			<script>
				alert('successfully completed....');
			</script>
			<?php
		}
		else
		{
			?>
			<script>
				alert('not successfully completed....');
			</script>
			<?php
		}
	}
?>