User = {
	'_id':'admin',
	'password':'badmin',
	'nick_name':'admin',
	'avatar':'',
	'desc':'',
	'source':'local',
	'join_time': 1457958007295,
	'ldap_server':'',
	'ldap_port':'',
	'ldap_tls':'',
	'ldap_user':'',
	'ldap_password':'',
	'ldap_dn':''	
}

Repository = {
	'_id':'appsoar/test',
	'namespace':'appsoar'
	'user_id':'admin'
	'push_time': 1457958007295,
	'desc':'',
	'permission':'public',  // 权限受命名空间控制
	'delete': 0
}

// 评论
Comment = {
	'_id':1,   
	'repository':'ubuntu',  // 问题：评论是对Repository，还是对其中某个Tag的评论？
	'tag_id':'1.0'
 	'user_id':'',
	'create_time': 13423423423,
	'content':'very good',
	'level':1
}

Tag = {
	'_id':1,
	'repository':'ubuntu',
	'tag_name':'1.0',
	'user_id':'',
	"digest": "sha256:fea8895f450959fa676bcc1df0611ea93823a735a01205fd8622846041d0c7cf",
	'create_time': 13423423423,
	'desc':'',
	'docker_file':''
	'delete':0,    // 0表示未删除，其他值表示已删除
}

Image = {
	'_id':"sha256:fea8895f450959fa676bcc1df0611ea93823a735a01205fd8622846041d0c7cf",
	'user_id':'admin'
	'repository':'ubuntu',
	'size':54345345,
	'create_time': 13423423423,
	"addr": "d5555f815d2b:5000",
	"instanceID": "7f58de75-0a72-4ce4-9a86-24f22b0925fd",
	'delete':0,    // 0表示未删除，其他值表示已删除
	'pull_num':0,  // 问题：怎么计数
}

Layer = {
	"_id": "sha256:a3ed95caeb02ffe68cdd9fd84406680ae93d633cb16422d00e8a7c22955b46d4",
    "image_id": "sha256:9409f5e54fdc68ef3f0aae3c5ffac22bfe2aabd0b363a4bdbe5292c93b75a661",
    "mediaType": "application/vnd.docker.image.rootfs.diff.tar.gzip",
    "size": NumberInt(32),
	'pull_num':0
}

// 用户组
Group = {
	'_id':1,
	'group_name':'dev',
	'create_time': 13423423423,
	'desc':'',
}


Namespace = {
	'_id': 'appsoar',  // 全局唯一
	'owner_id':'',
	'desc':'',
	'permission':'public'
	'create_time': 13423423423,
}

User_Group = {
	'_id':1,
	'user_id':1,
	'group_id':'',
	'join_time': 13423423423,
}

Group_Namespace = {
	'_id':1,
	'group_id':1,  
	'namespace':'appsoar',
	'control':1
}