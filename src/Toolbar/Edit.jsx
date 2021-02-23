import React, { useEffect, useState } from 'react';
import './Edit.css';

// logic
import { ZCM, ZCMbackup, restore, save, tempController } from 'logic/zcm.js';

// components
import Button from 'shared/Button';

//icons
import saveIcon from 'ass/vector/icons/files/save.svg';
import cancelIcon from 'ass/vector/icons/files/cancel.svg';
import historyIcon from 'ass/vector/icons/files/history.svg';



const EditToolbar = () => {
  const [ state, setState ] = useState(null);

  const handleOpenHistory = () => {
    console.log(ZCM, ZCMbackup)
  }
  const handleCancelChanges = (orig, backup) => {
    
    restore();
    tempController.redo({});
    tempController.content(ZCM);
    setTimeout(()=>{
      tempController.redo(ZCM);
      tempController.content('a');
      
    }, 500);
    
  }
  const handleSaveChanges = () => {
    save();
  }

  useEffect(()=>{
    console.log(ZCM)
    
  });

	return(
		<div className={ `Edit-Toolbar` }>
      <Button altClass={ `Toolbar-Button` }
        imgSrc={ historyIcon }
        imgDesc={ `Save Icon` }
        clicked={ handleOpenHistory }
      />
      <Button altClass={ `Toolbar-Button` }
        imgSrc={ cancelIcon }
        imgDesc={ `Save Icon` }
        clicked={ ()=>handleCancelChanges(ZCM, ZCMbackup) }
      />
      <Button altClass={ `Toolbar-Button` }
        imgSrc={ saveIcon }
        imgDesc={ `Save Icon` }
        clicked={ handleSaveChanges }
      />
		</div>
	);
}

export default EditToolbar;