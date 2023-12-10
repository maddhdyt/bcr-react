export default function Container(props) {
   return (
      <div className="w-11/12 lg:w-[1200px] h-full mx-auto" {...props}>
         {props.children}
      </div>
   );
}
