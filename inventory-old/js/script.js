
$(document).ready(function(){
    var itemWeight = $(".weight-num").text()

    $(".qty-increase").click(
      function() {
         $(".qty-num").text(Number($(".qty-num").text())+1);
            var itemQty = $(".qty-num").text()
            var totalWeight = parseInt(itemWeight, 10) * parseInt(itemQty, 10);
         $(".total-weight-num").text(totalWeight)
      }
    );

    $(".qty-decrease").click(
      function() {
        $(".qty-num").text( Math.max(0,Number($(".qty-num").text())-1));
            var itemQty = $(".qty-num").text()
            var totalWeight = parseInt(itemWeight, 10) * parseInt(itemQty, 10);
            $(".total-weight-num").text(totalWeight)
      }
    );

 });    