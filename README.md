# test_ipfs
For ipfs test code

# How to set up
- Explanation 설명
command 커맨드

> result 결과

## 1. Install on Linux - 리눅스에서 설치하기
- Download go-ipfs_v0.6.0_linux-amd64.tar.gz from GitHub: wget으로 zip파일을 다운받습니다.
wget https://github.com/ipfs/go-ipfs/releases/download/v0.6.0/go-ipfs_v0.6.0_linux-amd64.tar.gz

- Unzip the file: 다운받은 파일을 unzip 합니다.
tar -xvzf go-ipfs_v0.6.0_linux-amd64.tar.gz

> x go-ipfs/install.sh \
> x go-ipfs/ipfs \n
> x go-ipfs/LICENSE \n
> x go-ipfs/LICENSE-APACHE \n
> x go-ipfs/LICENSE-MIT \n
> x go-ipfs/README.md \n

- Move into the go-ipfs folder and run the install script: go-ipfs 폴더로 가서 배쉬 파일을 실행합니다.
cd go-ipfs
sudo bash install.sh

> Moved ./ipfs to /usr/local/bin \n

- Test: 잘 설치되었는지 테스트합니다.
ipfs --version

> ipfs version 0.6.0 \n


## 2. Initialize
- ipfs의 repository를 initialize 합니다.
ipfs init

initializing ipfs node at /Users/jbenet/.go-ipfs
> generating 2048-bit RSA keypair...done \n
> peer identity: Qmcpo2iLBikrdf1d6QU6vXuNb6P7hwrbNPW9kLAH8eG67z \n
> to get started, enter: \n
>   ipfs cat /ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/readme \n

아래와 같은 화면이 나오면 성공!

Hello and Welcome to IPFS! \n

██╗██████╗ ███████╗███████╗ \n
██║██╔══██╗██╔════╝██╔════╝ \n
██║██████╔╝█████╗  ███████╗ \n
██║██╔═══╝ ██╔══╝  ╚════██║ \n
██║██║     ██║     ███████║ \n
╚═╝╚═╝     ╚═╝     ╚══════╝ \n

If you see this, you have successfully installed
IPFS and are now interfacing with the ipfs merkledag!

 ------------------------------------------------------- \n
| Warning:                                              | \n
|   This is alpha software. use at your own discretion! | \n
|   Much is missing or lacking polish. There are bugs.  | \n
|   Not yet secure. Read the security notes for more.   | \n
 ------------------------------------------------------- \n

Check out some of the other files in this directory:

  ./about
  ./help
  ./quick-start     <-- usage examples
  ./readme          <-- this file
  ./security-notes
  
  
## 3. Take your node online
ipfs 데몬을 실행하여 퍼블릭 네트워크에 참여합니다.
ipfs daemon

> Initializing daemon... \n
> API server listening on /ip4/127.0.0.1/tcp/5001 \n
> Gateway server listening on /ip4/127.0.0.1/tcp/8080 \n
