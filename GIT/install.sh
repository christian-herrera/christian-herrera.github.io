#!/bin/bash

KeyGripLlavePub="5DD1A79758C3308BBBBF7AED75F83966CED8DAF3"
SignKeyID="64CB56CD8A2CBAD5"
result_gpgagent=0
result_bashrc=0
result_zshrc=0
result_sshcontrol=0




printStatus() {
clear;
echo -e "\n"
echo "      ██████╗██╗  ██╗██████╗ ██╗███████╗ ██╗   ███████╗    ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗"
echo "     ██╔════╝██║  ██║██╔══██╗██║██╔════╝ ██║   ██╔════╝    ██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝"
echo "     ██║     ███████║██████╔╝██║███████╗ ╚═╝   ███████╗    ███████╗██║     ██████╔╝██║██████╔╝   ██║   "
echo "     ██║     ██╔══██║██╔══██╗██║╚════██║       ╚════██║    ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   "
echo "     ╚██████╗██║  ██║██║  ██║██║███████║       ███████║    ███████║╚██████╗██║  ██║██║██║        ██║   "
echo "      ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝       ╚══════╝    ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   "
echo -e "\n\n"
}






# ========================================================================
# Configuracion del Archivo: gpg-agent.conf
printStatus
echo -n "[ ] Habilitando soporte SSH con gpg-agent..."
sleep 2

result=$(grep "enable-ssh-support" $HOME/.gnupg/gpg-agent.conf)
if [ -n "$result" ]; then
	echo -ne "\r[\u2713] Habilitando soporte SSH con gpg-agent... Skip\n"
else
	echo "enable-ssh-support" >> $HOME/.gnupg/gpg-agent.conf
	echo -ne "\r[\u2713] Habilitando soporte SSH con gpg-agent... Ok\n"
	result_gpgagent=1
fi



# ========================================================================
# Configuracion del Archivo: .bashrc
echo -n "[ ] Reconfigurando archivo .bashrc..."
sleep 2

result=$(grep "# Config. SSH (Chris)" $HOME/.bashrc)
if [ -n "$result" ]; then
	echo -ne "\r[\u2713] Reconfigurando archivo .bashrc... Skip\n"
else
	echo -ne "\r[\u2713] Reconfigurando archivo .bashrc... Ok\n"
	result_bashrc=1
	
	echo "# Config. SSH (Chris)" >> $HOME/.bashrc
	echo "unset SSH_AGENT_PID" >> $HOME/.bashrc
	echo "if [ \"\${gnupg_SSH_AUTH_SOCK_by:-0}\" -ne \$\$ ]; then" >> $HOME/.bashrc
	echo "  export SSH_AUTH_SOCK=\"\$(gpgconf --list-dirs agent-ssh-socket)\"" >> $HOME/.bashrc
	echo "fi" >> $HOME/.bashrc
	echo "export GPG_TTY=\$(tty)" >> $HOME/.bashrc
	echo "gpg-connect-agent updatestartuptty /bye >/dev/null" >> $HOME/.bashrc
fi



# ========================================================================
# Configuracion del Archivo: .zshrc
if [ -f "$HOME/.zshrc" ]; then
	echo -n "[ ] Reconfigurando archivo .zshrc..."
	sleep 2

	result=$(grep "# Config. SSH (Chris)" $HOME/.zshrc)
	if [ -n "$result" ]; then
		echo -ne "\r[\u2713] Reconfigurando archivo .zshrc... Skip\n"
	else
		echo -ne "\r[\u2713] Reconfigurando archivo .zshrc... Ok\n"
		result_zshrc=1
		
		echo "# Config. SSH (Chris)" >> $HOME/.zshrc
		echo "unset SSH_AGENT_PID" >> $HOME/.zshrc
		echo "if [ \"\${gnupg_SSH_AUTH_SOCK_by:-0}\" -ne \$\$ ]; then" >> $HOME/.zshrc
		echo "  export SSH_AUTH_SOCK=\"\$(gpgconf --list-dirs agent-ssh-socket)\"" >> $HOME/.zshrc
		echo "fi" >> $HOME/.zshrc
		echo "export GPG_TTY=\$(tty)" >> $HOME/.zshrc
		echo "gpg-connect-agent updatestartuptty /bye >/dev/null" >> $HOME/.zshrc
	fi
else
	echo -ne "\r[\u2713] Reconfigurando archivo .zshrc... No Existe!\n"
fi



# ========================================================================
# Configuracion del Archivo: .sshcontrol
echo -n "[ ] Reconfigurando archivo .ssh-control..."
sleep 2

result=$(grep $KeyGripLlavePub ~/.gnupg/sshcontrol)
if [ -n "$result" ]; then
	echo -ne "\r[\u2713] Reconfigurando archivo .ssh-control... Skip\n"
else
	echo $KeyGripLlavePub >> $HOME/.gnupg/sshcontrol
	echo -ne "\r[\u2713] Reconfigurando archivo .ssh-control... Ok\n"	
	result_sshcontrol=1
fi




# ========================================================================
# Configuracion de GIT
echo -n "[ ] Configurando GIT..."
sleep 2

git config --global user.signingkey $SignKeyID
git config --global gpg.program gpg
git config --global commit.gpgsign true

clear
echo "Ingrese los parametros de su cuenta de GIT:"
read -p "==> Usuario de GIT: " name
read -p "==> Email de GIT: " mail

git config --global user.name $name
git config --global user.email $mail

sleep 1
printStatus
if [[ $result_gpgagent -eq 0 ]]; then
	echo -e "[\u2713] Habilitando soporte SSH con gpg-agent... Skip"
else
	echo -e "[\u2713] Habilitando soporte SSH con gpg-agent... Ok"
fi
if [[ $result_bashrc -eq 0 ]]; then
	echo -e "[\u2713] Reconfigurando archivo .bashrc... Skip"
else
	echo -e "[\u2713] Reconfigurando archivo .bashrc... Ok"
fi
if [[ $result_zshrc -eq 0 ]]; then
	echo -e "[\u2713] Reconfigurando archivo .zshrc... Skip"
else
	echo -e "[\u2713] Reconfigurando archivo .zshrc... Ok"
fi
if [[ $result_sshcontrol -eq 0 ]]; then
	echo -e "[\u2713] Reconfigurando archivo .ssh-control... Skip"
else
	echo -e "[\u2713] Reconfigurando archivo .ssh-control... Ok"
fi
echo -e "[\u2713] Configurando GIT... Ok\n\n"



