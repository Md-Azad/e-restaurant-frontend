

const Secret = () => {
 
  const sendData = (id,name) => {
    const info = {id,name};
    
   
      fetch("http://localhost:5000/test", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => console.log("Received:", data))
        
    
  };

  return (
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        similique, neque fugiat ab inventore adipisci itaque modi vero quae
        consequuntur officiis labore suscipit provident dolores molestiae quam
        quos fugit nostrum?
      </p>
      <button onClick={() => sendData(3,"azad")} className="btn btn-secondary">
        click
      </button>
    </div>
  );
};

export default Secret;
