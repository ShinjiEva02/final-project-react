import { SearchInput } from "../components/search-input/SearchInput";
import { connect } from "react-redux";
import { filterUsers } from "../store/actions";

const mapDispatchToProps = dispatch => ({
    setFilter: name => dispatch(filterUsers(name.toLowerCase()))
});

export default connect(null, mapDispatchToProps)(SearchInput);
