<?php 


/**
* 
*/
class ClassName extends AnotherClass
{
	
	function __construct(argument)
	{
		# code...
	}


	public function other ($arg1 = '', $arg2 = array())
	{
		if ($arg1 == '') {
			return false;
		}

		$res = str_replace('find', 'replace', $arg1);
		return $res;
	}
}