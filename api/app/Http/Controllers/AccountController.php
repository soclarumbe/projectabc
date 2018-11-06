<?php

namespace App\Http\Controllers;

use App\Account;
use App\AccountInformation;
use App\AccountProfile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use App\Jobs\Email;
class AccountController extends APIController
{
    function __construct(){  
      $this->model = new Account();
      $this->validation = array(  
        "email" => "unique:accounts",
        "username"  => "unique:accounts"
      );
      $this->notRequired = array(
        'status'
      );
    }

    public function create(Request $request){
     $request = $request->all();
     $dataAccount = array(
      'code'  => $this->generateCode(),
      'password'        => Hash::make($request['password']),
      'status'          => 'NOT_VERIFIED',
      'email'           => $request['email'],
      'username'        => $request['username'],
      'account_type'    => $request['account_type'],
      'created_at'      => Carbon::now()
     );
     $this->model = new Account();
     $this->insertDB($dataAccount);
     return $this->response();
    }

    public function generateCode(){
      $code = 'IDF-'.substr(str_shuffle("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 28);
      $codeExist = Account::where('id', '=', $code)->get();
      if(sizeof($codeExist) > 0){
        $this->generateCode();
      }else{
        return $code;
      }
    }

    public function verify(Request $request){
      $data = $request->all();
      $this->model = new Account();
      $this->retrieveDB($data);
      dispatch(new Email($this->response['data'][0], 'verification')); // Send Email
      return $this->response();
    }

    public function updateByVerification(Request $request){
      $data = $request->all();
      $this->model = new Account();
      $this->updateDB($data);
      return $this->response();
    }


    public function update(Request $request){ 
      $data = $request->all();
      $result = Account::where('code', '=', $data['code'])->where('username', '=', $data['username'])->get();
      if(sizeof($result) > 0){
        $updateData = array(
          'id'        => $result[0]['id'],
          'password'  => Hash::make($data['password'])
        );
        $this->model = new Account();
        $this->updateDB($updateData);
        if($this->response['data'] == true){
          dispatch(new Email($result[0], 'reset_password'));
          return $this->response();
        }else{
          return response()->json(array('data' => false));
        }
      }else{
        return response()->json(array('data' => false));
      }
    }
    public function hashPassword($password){
      $data['password'] = Hash::make($password);
      return $data;
    }
    public function customValidate($text){
      $validation = array('email' => 'required|email'); 
      return $this->validateReply($text, $validation);
    }

    public function validateReply($text, $validation){
      $validator = Validator::make($text, $validation);
      if($validator->fails()){
        return false;
      }
      else
        return true;
    }

    public function retrieve(Request $request){
      $data = $request->all();
      $this->model = new Account();
      $result = $this->retrieveDB($data);

      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
          $accountId = $result[$i]['id'];
          $activeSemesterId = $result[$i]['active_semester'];
          $result[$i]['account_information_flag'] = false;
          $result[$i]['account_profile_flag'] = false;
          $accountInfoResult = AccountInformation::where('account_id', '=', $result[$i]['id'])->get();
          $accountProfileResult = AccountProfile::where('account_id', '=', $result[$i]['id'])->orderBy('created_at', 'DESC')->get();
          $result[$i]['account_information'] = (sizeof($accountInfoResult) > 0) ? $accountInfoResult[0] : null;
          $result[$i]['account_profile'] = (sizeof($accountProfileResult) > 0) ? $accountProfileResult[0] : null;
          $i++;
        }
        return response()->json(array('data' => $result));
      }else{
        return $this->response();
      }
    }



}