if (self.CavalryLogger) { CavalryLogger.start_js(["u4sSl"]); }

__d('NotificationBeeperItemContents.react',['cx','Animation','AsyncRequest','Bootloader','FBProfilePhotoShadow.react','Image.react','ImageBlock.react','NotificationBeeperItemCloseButton.react','NotificationURI','NotificationUserActions','React','ReactDOM','TextWithEntities.react','Timestamp.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k,l){return c('React').createElement('span',{className:'fwb'},k);}var j=c('React').createClass({displayName:'NotificationBeeperItemContents',_markAsRead:function(){c('NotificationUserActions').markNotificationsAsRead([this.props.beep.notificationID]);},_onClick:function(k){this._markAsRead();this.props.onHide();if(k.button===1||k.altKey||k.ctrlKey||k.metaKey||k.shiftKey)return;var l=this.props.beep;if(c('NotificationURI').isAlbumDraftRecoveryDialogURI(l.link)){new (c('AsyncRequest'))(l.link).send();k.preventDefault();}else if(l.photo&&c('NotificationURI').snowliftable(l.link)){c('Bootloader').loadModules(["PhotoSnowlift"],function(m){m.bootstrap(l.link,k.currentTarget);},'NotificationBeeperItemContents.react');k.preventDefault();}else if(l.ajaxifyLink){c('Bootloader').loadModules(["AsyncDialog"],function(m){m.bootstrap(l.ajaxifyLink,k.currentTarget,'dialog');},'NotificationBeeperItemContents.react');k.preventDefault();}},_onClose:function(){this._markAsRead();this.props.onHide();},_doFlash:function(){new (c('Animation'))(c('ReactDOM').findDOMNode(this.refs.inner)).from('opacity','0').to('opacity','1').duration(200).go();},componentDidMount:function(){this.props.onReadyToHide(this.props.beep.notificationID);},componentDidUpdate:function(k){if(k.beep.beepID!==this.props.beep.beepID){this._doFlash();this.props.onReadyToHide(this.props.beep.notificationID);}},render:function(){var k=this.props.beep,l=((k.actors[0]||{}).profile_picture||{}).uri,m=(k.icon||{}).uri;return (c('React').createElement('div',{ref:'inner',className:this.props.className},c('React').createElement(c('NotificationBeeperItemCloseButton.react'),{onClick:this._onClose}),c('React').createElement('a',{href:k.link,onClick:this._onClick,className:"_3soi"},c('React').createElement(c('ImageBlock.react'),{className:"_3soj",spacing:'medium'},c('React').createElement(c('FBProfilePhotoShadow.react'),{className:"_2yt7"},c('React').createElement(c('Image.react'),{src:l,className:"_3sok"+(!l?' '+"hidden_elem":'')})),c('React').createElement('div',{className:"_3sol"},c('React').createElement(c('TextWithEntities.react'),{renderEmoticons:true,renderEmoji:true,interpolator:i,ranges:k.text.ranges,aggregatedranges:k.text.aggregated_ranges,text:k.text.text}),c('React').createElement(c('ImageBlock.react'),{className:"_3som"},c('React').createElement(c('Image.react'),{className:"_1x8t"+(!m?' '+"hidden_elem":''),src:m}),c('React').createElement(c('Timestamp.react'),{time:k.timestamp.time,text:k.timestamp.text,verbose:k.timestamp.verbose})))))));}});f.exports=j;},null);