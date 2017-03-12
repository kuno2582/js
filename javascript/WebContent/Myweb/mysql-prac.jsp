<%@ page contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ page import="java.sql.*"%>
<%
String URL = "jdbc:mysql://localhost:3306/mytest";		//3306�� Mysql��Ʈ��ȣ, mytest�� DB��
String USER = "root";							//���� id, APMSETUP�� �⺻������ root
String PASS="apmsetup";						//���������� APMSETUP�� �⺻������ apmsetup

Connection conn=null;
Statement stmt = null;
ResultSet rs = null;

try
{	
	Class.forName("com.mysql.jdbc.Driver");		//mysql�� ���
	conn = DriverManager.getConnection(URL, USER, PASS);		//���̵�, ��й�ȣ, �ּҸ� �ְ� ����
	stmt = conn.createStatement();
	rs = stmt.executeQuery( "select * from member_info" );		//person�� DB�� ���̺��
	while( rs.next() )
	{
		String id = rs.getString("ID");				//pid, name�� ���̺� �� �ʵ���Դϴ�
		String password = rs.getString("PASSWORD");
		out.println(" ���̵� : "+id+"<br>"+"��� : "+password+"<br><br>");
	}
}catch(SQLException e)					//try�� ����
{
	out.println(e.getMessage());
}
finally
{
	if(rs != null)try{rs.close();}catch(SQLException ex){}
	if(stmt != null)try{stmt.close();}catch(SQLException ex){}
	if(conn != null)try{conn.close();}catch(SQLException ex){}
}
%>
