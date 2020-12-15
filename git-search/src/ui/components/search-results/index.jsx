import React, { useEffect, useState } from "react";
import { Input, Card } from "../index.js";
import { ReactComponent as Loading } from "../../../assets/svg/loading.svg";
import { connect } from "react-redux";
import { useApi } from "../../../hooks";
import { bindActionCreators } from "redux";
import { setUsersList, searchUser, changeName} from "../../../actions";
import "./styles.css";

const SearchResults = ({
  temporaryUser,
  usersList,
  setUsersList,
  searchUser,
  changeName
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [research, setResearch] = useState(false);

  const api = useApi();

  useEffect(() => {
    const getUsers = async () => {
      if (!!temporaryUser) {
        const request = await api.getUsers(temporaryUser);
        setUsersList(request.items);
      }
      setIsLoading(false);
    };
    setIsLoading(true);
    getUsers();
  }, [research]);

  useEffect(() => changeName("Lista de Usuários") ,[])

  const handleOnBlur = value => {
    if (value !== temporaryUser) {
      searchUser(value);
      setResearch(!research);
    }
  };

  const renderUsersList = () => {
    return !!usersList && usersList.length !== 0 ? (
      usersList.map(user => (
          <Card key={user.id} avatar={user.avatar_url} name={user.login} />
        ))
    ) : (
      <div className="search-default">
        {!!temporaryUser
          ? "Não encontrei nenhum usuário com esse nome :("
          : "Por favor, digite um nome para eu pesquisar :)"}
      </div>
    );
  };

  return (
    <div className="container-search">
      <div className="info-header">
        <h1 className="search-title">Search Results</h1>
        <div className="input-container">
          <Input withIcon newValue={temporaryUser} onBlur={handleOnBlur} />
        </div>
      </div>
      <div className="container-list">
        {!!isLoading ? <Loading /> : renderUsersList()}
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  temporaryUser: store.searchState.temporaryUser,
  usersList: store.searchState.usersList,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setUsersList, searchUser, changeName }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
