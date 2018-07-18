<?php
header("Access-Control-Allow-Origin: *");

class Api extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $data = array('error' => "Undefined function");
        echo json_encode($data);
    }

    public function register()
    {
        $x = $_POST;
        $check = $this->data->fetch('members', array('email' => $x['email']));
        if (!empty($check)) {
            echo "found";
        } else {
            $this->data->insert('members', $x);
            echo "success";
        }
        //echo json_encode($xx);
    }

    public function profile()
    {
        $x = $_POST;
        $xx = array('fname' => $x['fname'], 'lname' => $x['lname'], 'email' => $x['email']);
        $this->data->update(array('id' => $x['id']), 'members', $xx);
    }

    public function changePassword()
    {
        $data = $_POST;
        $check = $this->data->fetch("members", array('id' => $data['id']));
        if ($data['password'] == $check[0]['password']) {
            if ($data['password1'] == $data['password2']) {
                $this->data->update(array("id" => $check[0]['id']), "members", array("password" => $data['password1']));
                $check['message'] = "Change";
                echo json_encode($check);
            } else {
                $check['message'] = "Mismatch";
                echo json_encode($check);
            }
        } else {
            $check['message'] = "Incorrect";
            echo json_encode($check);
        }
    }

    public function login()
    {
        $x = $_POST;
        //  $x = file_get_contents("php://input");
        //$xx = json_encode($x);
        $check = $this->data->fetch('members', $x);
        if (!empty($check)) {
            $check['message'] = "Success";
            echo json_encode($check);
        } else {
            $check['message'] = "Error";
            echo json_encode($check);
        }
    }

    public function test()
    {
        $data = $this->data->fetch('contacts', array('folders' => 'contacts'));
        $new = array();
        foreach ($data as $k => $val) {
            $new['draw'] = 0;
            $new['recordsTotal'] = count($data);
            $new['recordsFiltered'] = count($data);
            $new['data'][$k]['first_name'] = $val['FirstName'] . " " . $val['LastName'];
            $new['data'][$k]['last_name'] = $val['Phone'];
            // $new['data'][$k]['position'] = $val['Email'];
            $new['data'][$k]['office'] = $val['Address'];
        }
        echo json_encode($new);
    }

    public function getFolder()
    {
        $data = $this->data->myquery("SELECT * FROM `followups` WHERE `member_id` = '0' AND `contact_id` = '0'");
        echo json_encode($data);
    }

    public function getsinglefolder()
    {
        $x = $_POST;
        $hash = explode('=', $x['hashfolder']);
        $data = $this->data->fetch('followups', array('folder' => $hash[0], 'member_id' => $x['id']));
        foreach ($data as $k => $v) {
            $x = $this->data->fetch('contacts', array('id' => $v['contact_id']));
            $data[$k]['contact'] = (!empty($x)) ? $x : array();
            foreach ($x as $as) {
                echo "<tr>";
                echo "<td>" . $as['FirstName'] . "</td>";
                echo "<td>" . $as['Phone'] . "</td>";
                echo "<td>" . $as['Address'] . "</td>";
                echo "</tr>";
            }
        }
    }

    public function test22()
    {
        $item_per_page = 5;
        if (isset($_POST['page'])) {
            $page_number = filter_var($_POST['page'], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
            if (!is_numeric($page_number)) {
                die('Invalid page number!');
            } //incase of invalid page number
        } else {
            $page_number = 1; //if there's no page number, set it to 1
        }
        $data = $this->data->myquery("SELECT * FROM `contacts` limit 100");
        $result = $this->data->myquery("SELECT COUNT(*) as `total` FROM `contacts`");
        $total_records = $result[0]['total'];
        $total_pages = floor($result[0]['total'] / $item_per_page);
        $page_position = (($page_number - 1) * $item_per_page);
        $result = $this->data->myquery("SELECT * FROM `contacts` ORDER BY `id` ASC LIMIT $page_position,$item_per_page");
        echo "<table>";
        echo "<thead>";
        echo "<tr>";
        echo "<th>Name</th>";
        echo "<th>Phone</th>";
        echo "<th>Address</th>";
        echo "<th>Action</th>";
        echo "</tr>";
        echo "</thead>";
        echo "<tbody>";
        foreach ($result as $v) {
            echo "<tr id='id{$v['id']}'>";
            echo "<td>" . $v['FirstName'] . "</td>";
            echo "<td>" . $v['Phone'] . "</td>";
            echo "<td>" . $v['Address'] . "</td>";
            echo "<td><a href='view_notes.html#{$v['id']}'><button type='button'>Notes</button></a></td>";
            echo "<td><a href='view_contact.html#{$v['id']}'><button type='button'>View</button></a></td>";
            echo "</tr>";
        }
        echo "</tbody>";
        echo "</table>";
        echo '<div align="center">';
        echo $this->paginate_function($item_per_page, $page_number, $total_records, $total_pages);
        echo '</div>';
    }

    function paginate_function($item_per_page, $current_page, $total_records, $total_pages)
    {
        $pagination = '';
        if ($total_pages > 0 && $total_pages != 1 && $current_page <= $total_pages) { //verify total pages and current page number
            $pagination .= '<ul class="pagination">';
            $right_links = $current_page + 10;
            $previous = $current_page - 10; //previous link
            $next = $current_page + 1; //next link
            $back = $current_page - 1; //immediate previous page
            $first_link = true; //boolean var to decide our first link
            if ($current_page > 1) {
                //$previous_link = ($previous==0)?1:$back;
                $pagination .= '<li class="first"><a href="#" data-page="1" title="First">&laquo;</a></li>'; //first link
                $pagination .= '<li><a href="#" data-page="' . $back . '" title="Previous">&lt;</a></li>'; //previous link
                for ($i = ($current_page - 1); $i < $current_page; $i++) { //Create left-hand side links
                    if ($i > 0) {
                        $pagination .= '<li><a href="#" data-page="' . $i . '" title="Page' . $i . '">' . $i . '</a></li>';
                    }
                }
                $first_link = false; //set first link to false
            }
            if ($first_link) { //if current active page is first link
                $pagination .= '<li class="first active">' . $current_page . '</li>';
            } elseif ($current_page == $total_pages) { //if it's the last active link
                $pagination .= '<li class="last active">' . $current_page . '</li>';
            } else { //regular current link
                $pagination .= '<li class="active">' . $current_page . '</li>';
            }
            for ($i = $current_page + 1; $i < $right_links; $i++) { //create right-hand side links
                if ($i <= $total_pages) {
                    $pagination .= '<li><a href="#" data-page="' . $i . '" title="Page ' . $i . '">' . $i . '</a></li>';
                }
            }
            if ($current_page < $total_pages) {
                //$next_link = ($i > $total_pages)? $total_pages : $next;
                $pagination .= '<li><a href="#" data-page="' . $next . '" title="Next">&gt;</a></li>'; //next link
                $pagination .= '<li class="last"><a href="#" data-page="' . $total_pages . '" title="Last">&raquo;</a></li>'; //last link
            }
            $pagination .= '</ul>';
        }
        return $pagination; //return pagination links
    }

    public function calender()
    {
        $x = $_POST;
        $data = $this->data->fetch('reminder', array('user_id' => $x['id']));
        foreach ($data as $k => $v) {
            //$url = "http://localhost/gap/single_calender.html#{$v['id']}";
               $url = "single_calender.html#{$v['id']}";
//            $url = "<script>window.location.href = 'single_calender.html#{$v['id']}';</script>";
            $hello[] = array('url' => $url, 'title' => $v['name'], 'start' => date('Y-m-d', strtotime($v['due_date'])));
        }
        echo json_encode($hello);
    }

    public function SingCalender()
    {
        $x = $_POST;
        $data = $this->data->fetch('reminder', array('id' => $x['calId'], 'user_id' => $x['id']));
        foreach ($data as $k => $v) {
            $xx = $this->data->fetch('contacts', array('id' => $v['contact_id']));
            $data[$k]['contact'] = (!empty($xx)) ? $xx : array();
            echo "<tr>";
            echo "<td>" . $v['name'] . "</td>";
            echo "<td>" . date('Y-m-d', strtotime($v['due_date'])) . "</td>";
            echo "<td>" . ((!empty($data[$k]['contact'][0]['FirstName'])) ? $data[$k]['contact'][0]['FirstName'] : "Not Defined") . "</td>";
            echo "<td>" . ((!empty($data[$k]['contact'][0]['FirstName'])) ? $data[$k]['contact'][0]['FirstName'] : "Not Defined") . "</td>";
            echo "<td><button type='button' onclick='edit()'>Edit</button></td>";
            echo "</tr>";
        }
    }

    public function AddCalender()
    {
        $x = $_POST;
        $this->data->insert('reminder', $x);
        echo "success";
    }

    public function allCalender()
    {
        $x = $_POST;
        $data = $this->data->fetch('reminder', array('user_id' => $x['id']));
        foreach ($data as $k => $v) {
            $xx = $this->data->fetch('contacts', array('id' => $v['contact_id']));
            $data[$k]['contact'] = (!empty($xx)) ? $xx : array();
            echo "<tr>";
            echo "<td>" . $v['name'] . "</td>";
            echo "<td>" . date('Y-m-d', strtotime($v['due_date'])) . "</td>";
            echo "<td>" . ((!empty($data[$k]['contact'][0]['FirstName'])) ? $data[$k]['contact'][0]['FirstName'] : "Not Defined") . "</td>";
            echo "<td>" . ((!empty($data[$k]['contact'][0]['FirstName'])) ? $data[$k]['contact'][0]['FirstName'] : "Not Defined") . "</td>";
            echo "</tr>";
        }
    }

    public function viewContact()
    {
        $x = $_POST;
        $data = $this->data->fetch('contacts', array('id' => $x['hash']));
        echo json_encode($data);
    }

    public function AddNotes()
    {
        $x = $_POST;
        $xx['contact_id'] = $x['hashid'];
        $xx['user_id'] = $x['id'];
        $xx['note_title'] = $x['note_title'];
        $xx['note'] = $x['note'];
        $this->data->insert('notes', $xx);
        echo "Sucess";

    }

    public function ViewNotes()
    {
        $x = $_POST;
        $data = $this->data->fetch('notes', array('user_id' => $x['idd'], 'contact_id' => $x['hashid']));
        foreach ($data as $v) {
            echo "<tr>";
            echo "<td>" . $v['note_title'] . "</td>";
            echo "<td>" . $v['note'] . "</td>";
            echo "<td><button type='button' class='btn btn-danger' onclick='deleteNote({$v['id']})' >Delete</button></td>";
            echo "</tr>";
        }
    }

    public function DeleteNotes()
    {
        $x = $_POST;
        $this->data->delete(array('id' => $x['id']), 'notes');
        echo "Sucess";
    }

}