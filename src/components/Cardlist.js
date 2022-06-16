import Card from './Card';

const Cardlist = ({robots},fn) => {
  return (
    <div>
        {
            robots.map((robots) => (
                <Card
                key={robots.id}
                id={robots.id}
                username={robots.username}
                email={robots.email}
                />
            ))
        }
    </div>
  )
}

export default Cardlist;