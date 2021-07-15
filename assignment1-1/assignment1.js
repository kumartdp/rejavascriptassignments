

function outerfunction(value,callbackreference)
{
return "the value is "+value+"  "+callbackreference();

}


function callbackfunction()
{
return 10;
}

console.log(outerfunction(10,callbackfunction));