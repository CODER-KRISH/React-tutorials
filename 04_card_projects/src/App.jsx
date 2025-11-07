import Card from './components/Card.jsx'

const App = () => {

  const jobOpenings = [
    {
      logo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      company: "Meta",
      days: "5 days ago",
      post: "Frontend Engineer",
      type1: "Full Time",
      type2: "Junior Level",
      moneyperhours: "$65/hour",
      address: "Menlo Park, USA"
    },
    {
      logo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      company: "Amazon",
      days: "2 weeks ago",
      post: "Backend Developer",
      type1: "Full Time",
      type2: "Mid Level",
      moneyperhours: "$70/hour",
      address: "Hyderabad, India"
    },
    {
      logo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      company: "Apple",
      days: "3 weeks ago",
      post: "iOS Developer",
      type1: "Part Time",
      type2: "Senior Level",
      moneyperhours: "$90/hour",
      address: "Cupertino, USA"
    },
    {
      logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      company: "Netflix",
      days: "10 days ago",
      post: "Machine Learning Engineer",
      type1: "Full Time",
      type2: "Senior Level",
      moneyperhours: "$110/hour",
      address: "Los Gatos, USA"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      company: "Google",
      days: "1 week ago",
      post: "Cloud Solutions Architect",
      type1: "Full Time",
      type2: "Mid Level",
      moneyperhours: "$85/hour",
      address: "Bangalore, India"
    },
    {
      logo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      company: "Microsoft",
      days: "4 weeks ago",
      post: "Data Scientist",
      type1: "Full Time",
      type2: "Junior Level",
      moneyperhours: "$75/hour",
      address: "Redmond, USA"
    },
    {
      logo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      company: "IBM",
      days: "2 days ago",
      post: "AI Research Engineer",
      type1: "Full Time",
      type2: "Senior Level",
      moneyperhours: "$95/hour",
      address: "New York, USA"
    },
    {
      logo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      company: "Tesla",
      days: "6 days ago",
      post: "Software Engineer",
      type1: "Full Time",
      type2: "Mid Level",
      moneyperhours: "$80/hour",
      address: "Austin, USA"
    }
  ];

  return (
    <div className="Card">
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card logo={elem.logo}  company={elem.company}  days={elem.days} type1={elem.type1}  type2={elem.type2} moneyperhours={elem.moneyperhours} address={elem.address} />
        </div>
      })}
    </div>
  )
}

export default App