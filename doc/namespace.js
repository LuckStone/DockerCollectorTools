User = {
	'_id':'admin',
	'password':'badmin',
	'nick_name':'admin'
	'avatar':''	
	'join_time': 1457958007295,
}

Repository = {
	'_id':'appsoar/test',
	'namespace':'appsoar'
	'user_id':'admin'
	'push_time': 1457958007295,
	'desc':'',
	'is_public':true,
	'delete': 0
}

Blobs = {
	'_id':1,
	'repository':'test',
	'mediaType':'application/octet-stream'
	'length':'',
	'digest':'sha256:03f4658f8b782e12230c1783426bd3bacce651ce582a4ffb6fbbfa2079428ecb'
}

// ����
Comment = {
	'_id':1,   
	'repository':'ubuntu',  // ���⣺�����Ƕ�Repository�����Ƕ�����ĳ��Tag�����ۣ�
	'tag_id':'1.0'
 	'user_id':'',
	'create_time': 13423423423,
	'content':'very good',
	'level':1
}

Tag = {
	'_id':1,
	'user_id':'admin'
	'repository':'ubuntu',
	'tag_name':'1.0',
	'size':54345345,
	"digest": "sha256:fea8895f450959fa676bcc1df0611ea93823a735a01205fd8622846041d0c7cf",
	'create_time': 13423423423,
	'delete':0,    // 0��ʾδɾ��������ֵ��ʾ��ɾ��
	'pull_num':0,  // ���⣺��ô����
}


Layer = {
	"_id": "sha256:a3ed95caeb02ffe68cdd9fd84406680ae93d633cb16422d00e8a7c22955b46d4",
    "image_id": "sha256:9409f5e54fdc68ef3f0aae3c5ffac22bfe2aabd0b363a4bdbe5292c93b75a661",
    "mediaType": "application/vnd.docker.image.rootfs.diff.tar.gzip",
    "size": NumberInt(32),
	'pull_num':0
}

// �û���
Group = {
	'_id':1,
	'group_name':'dev',
	'namespace':'appsoar',
	'create_time': 13423423423,
	'desc':'',
}


Namespace = {
	'_id': 'appsoar',  // ȫ��Ψһ
	'owner_id':'',
	'desc':'',
	'create_time': 13423423423,
}

User_Group = {
	'_id':1,
	'user_id':1,
	'namespace':'appsoar',
	'group_id':'',
	'join_time': 13423423423,
}

Group_Namespace = {
	'_id':1,
	'group_id':1,  
	'namespace':'appsoar',
}