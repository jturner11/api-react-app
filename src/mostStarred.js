import React,{Component} from "react"
import { gitHubApiFetch } from "./services";
import moment from "moment";


class MostStarred extends Component {
    constructor(props) {
        super(props);
            this.state = {
                repos: [],
            };
    }

    componentWillMount () {
        console.log('[MostStarred] componentWillMount');
        const { date, language, per_page } = this.props;
        
        gitHubApiFetch(date, language, per_page)
            .then(({ items }) => {
                this.setState({ repos: items });
            })
    }
    componentWillReceiveProps(nextProps) {
        const { date, language, per_page } = nextProps 
        
        if(nextProps.language !== this.props.language) {
            gitHubApiFetch(date,language, per_page)
            .then(({ items }) => {
                this.setState({ repos: items });
            })
          // nextProps.myProp has a different value than our current prop
          // so we can perform some calculations based on the new value
        }
      }

    componentDidMount () {
        console.log('[MostStarred] componentDidMount');
    }

    renderRepo (repo, index) {
        const { name, html_url, description, created_at, stargazers_count } = repo;
        return (
                <div className="repo-box"
                     key={ `repo-${index}` }>
                        <p className="repo-box__name">
                            <h4> { name } </h4>
                        </p>
                        <p><a href="{ html_url }"> { html_url}</a></p>
                        <p className="repo-box__description"> { description }</p>
                        <p>
                            <span className="repo-box__date">{ moment(created_at).format("Do-MMMM-YYYY") }</span>{" "}
                            <span className="repo-box__stars">
                                <p>{ stargazers_count }</p>
                            </span>
                        </p>
                </div>
        );
    }
    render() {
        console.log('[MostStarred] render');
        return (
            <div className="repo-list">
            <div className="repo-list__langauge">
                 {this.props.language}
            </div>
            { this.state.repos.map(this.renderRepo) }
            </div>  
        );
    }
}

export default MostStarred