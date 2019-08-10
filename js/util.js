/*
     * function { load } 加载图片资源
     * param { imgUrl: Object } 按照key，val形式存储要加载图片资源
     * param { fn: Function } 加载完毕之后，把资源传给这个回调
     * */
var util={
    load(imgUrl, fn) {
        let imgObj = {}

        let tempImg, loaded = 0, imgLenght = 0;

        for (let key in imgUrl) {
            imgLenght++;
            tempImg = new Image();
            tempImg.onload = function () {
                loaded++;
                if (loaded >= imgLenght) {
                    fn(imgObj);
                }
            }
            tempImg.src = imgUrl[key];
            imgObj[key] = tempImg;
        }
    }
}
export default util; 
