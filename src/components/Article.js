function Article({ title, date = "January 1, 1970", preview, minutes }) {
    let emoji = "";
    if (minutes < 30) {
      const count = Math.ceil(minutes / 5);
      emoji = "☕️".repeat(count);
    } else {
      const count = Math.ceil(minutes / 10);
      emoji = "🍱".repeat(count);
    }
  

    return (
      <article>
        <h3>{title}</h3>
        <small>
          {emoji} {minutes} min read 
          {date}
        </small>
        <p>{preview}</p>
      </article>
    );
  }
  
  export default Article;
  