import React from 'react'

//der button um gruppen zu bearbeiten
class GruppeBearbeitenTag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      newName: this.props.gruppe.name
    }
  }

  
  /** kümmert sich um änderungen von GruppenName
   * @param  {} event
   */
  handleChange(event) {
    // ToDo: implementieren
    let gruppenName = event.target.value
    this.setState({newName: gruppenName})
  }

  //benennt gruppe um
  gruppeUmbenennen(gruppe, event) {
    if (event && event.key != "Enter") return
    // ToDo: implementieren
    gruppe.name = this.state.newName
    this.setState({isEditing : false})
  }

  // rendert UI
  render() {
    const gruppe = this.props.gruppe

    const viewTemplate = (
      <dt>
        <span>{gruppe.name}</span>
        <i className="material-icons"
           onClick={() => this.setState({isEditing: true})}>
          drive_file_rename_outline</i>
        <i className="material-icons"
           onClick={this.props.entfernenHandler}>delete</i>
      </dt>
    )
    const editTemplate = (
      <dt>
        <input type="search" value={this.state.newName} autoFocus={true}
               onChange={event => this.handleChange(event)}
               onKeyPress={event => this.gruppeUmbenennen(gruppe, event)}/>
        <i className="material-icons"
           onClick={() => this.setState({isEditing: false})}>cancel </i>
        <i className="material-icons"
           onClick={() => this.gruppeUmbenennen(gruppe)}>check_circle </i>
      </dt>
    )

    return (
      this.state.isEditing
        ? editTemplate
        : viewTemplate
    )
  }
}

export default GruppeBearbeitenTag
