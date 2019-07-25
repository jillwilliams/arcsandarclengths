const diameter = ( ) => {
  var radius = document.getElementById("myRadius").value;
    return (radius * 2) + " un";
}
const diameterOutput = ( ) => {
document.getElementById("demo").innerHTML = diameter();
};

const centralAngleDegrees = ( ) => {
  var centralAngle = document.getElementById("myCentralAngle").value;
  var diameterTwo = document.getElementById("myDiameterTwo").value;
  var calc1 = centralAngle * diameterTwo * Math.PI;
  var calc2 = calc1 / 360;
  var answer = calc2.toFixed(2);
      return answer + " un"; 
}
const arcLengthOutput = ( ) => {
  document.getElementById("demo2").innerHTML = centralAngleDegrees( );
};

