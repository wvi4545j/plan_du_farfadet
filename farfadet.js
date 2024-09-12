((a,b)=>{
  document.body.append(a);b.forEach(c=>{a.style[c[0]]=c[1];});
})(
 document.createElement('div'),
 [['background','#000'],['bottom','calc(50vh - 150px)'],['height','350px'],['left','20px'],['position','absolute'],['width','150px']]
);
