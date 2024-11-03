const CardCatego = ({srcImg,altImg,title})=>{

    return(
        <div className="flex flex-col bg-base-100 w-1/6 shadow-xl justify-center items-center">
  <figure>
    <img
      src={srcImg}
      alt={altImg} />
  </figure>
    <h3 className="text-sm">{title}</h3>
</div>
    )
}
export default CardCatego;